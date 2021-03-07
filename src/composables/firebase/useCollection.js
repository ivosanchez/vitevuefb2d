import { ref, watchEffect } from 'vue'
import { db } from './firebase'

const useCollection = collection => {
    const error = ref(null)

    const getCollection = collection => {
        const documents = ref(null)

        // register the firestore collection reference
        let collectionRef = db.collection(collection).orderBy('createdAt')

        const unsub = collectionRef.onSnapshot(
            snap => {
                let results = []
                snap.docs.forEach(doc => {
                    // must wait for the server to create the timestamp & send it back
                    doc.data().createdAt &&
                        results.push({ ...doc.data(), id: doc.id })
                })

                // update values
                documents.value = results
                error.value = null
            },
            err => {
                console.log(err.message)
                documents.value = null
                error.value = 'could not fetch the data'
            }
        )

        watchEffect(onInvalidate => {
            onInvalidate(() => unsub())
        })

        return { error, documents }
    }

    // add a new document
    const addDoc = async doc => {
        error.value = null

        try {
            await db.collection(collection).add(doc)
        } catch (err) {
            console.log(err.message)
            error.value = 'could not send the message'
        }
    }
}

export { getCollection, addDoc, error }
