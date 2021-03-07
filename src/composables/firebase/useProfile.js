import { ref, computed } from 'vue'
import { db } from './firebase'

const profile = ref(null)
const loading = ref(false)
const error = ref(null)

const setProfile = async user => {
    if (user.value) {
        loading.value = true
        try {
            let res = await db.collection('profiles').doc(user.value.uid).get()
            if (res.exists) {
                profile.value = res.data()
            } else {
                let newProfile = createNewProfile(user)
                await saveProfile(newProfile)
            }
        } catch (err) {
            console.log(err.message)
        }
        loading.value = false
    } else {
        profile.value = null
    }
}

const createNewProfile = user => {
    let newProfile = {
        uid: user.value.uid,
        displayName: user.value.displayName,
        email: user.value.email,
        phoneNumber: user.value.phoneNumber,
        emailVerified: user.value.emailVerified,
        phoneVerified: false,
    }
    return newProfile
}

const saveProfile = async updatedProfile => {
    db.collection('profiles').doc(updatedProfile.uid).set(updatedProfile)
    profile.value = updatedProfile
}

export function useProfile() {
    return { setProfile, saveProfile, profile, loading, error }
}
