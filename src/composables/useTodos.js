import { ref, computed, watchEffect } from 'vue'
import { time, db } from './firebase/firebase'
import { useAuth } from '../composables/firebase/useAuth'

const { user } = useAuth()
const todos = ref([])
const newTodo = ref({})
const error = ref(null)

const getUserTodos = () => {
    const unsubscribe = db
        .collection('todos')
        .where('createdBy', '==', user.value.uid)
        .orderBy('updatedAt', 'desc')
        .onSnapshot(
            snap => {
                let results = []
                snap.docs.forEach(doc => {
                    // must wait for the server to create the timestamp & send it back
                    doc.data().updatedAt &&
                        results.push({ ...doc.data(), id: doc.id })
                })
                todos.value = results
                error.value = null
            },
            err => {
                console.log(err.message)
                todos.value = []
                error.value = 'could not fetch the data'
            }
        )

    watchEffect(onInvalidate => {
        onInvalidate(() => {
            todos.value = []
            unsubscribe()
        })
    })
}

const addTodo = async addedTodo => {
    await db.collection('todos').add({
        updatedAt: time(),
        completed: false,
        ...addedTodo,
        createdBy: user.value.uid,
    })
    newTodo.value = {}
}
const deleteTodo = id => {
    db.collection('todos').doc(id).delete()
}

const updateTodo = (id, updatedTodo) => {
    db.collection('todos').doc(id).set(updatedTodo)
}

const activeTodos = computed(() => {
    return todos.value.filter(t => !t.completed)
})

const completedTodos = computed(() => {
    return todos.value.filter(t => t.completed)
})

export function useTodos() {
    return {
        todos,
        getUserTodos,
        newTodo,
        addTodo,
        deleteTodo,
        updateTodo,
        activeTodos,
        completedTodos,
    }
}
