import { ref } from 'vue'
import { firebase, auth } from './firebase'
import { useProfile } from './useProfile'

const user = ref(auth.currentUser)
const error = ref(null)
const { setProfile } = useProfile()

// auth changes
auth.onAuthStateChanged(async _user => {
    user.value = _user
    await setProfile(user)
})

// methods
const googleLogin = async () => {
    error.value = null
    try {
        const provider = new firebase.auth.GoogleAuthProvider()
        let res = await auth.signInWithPopup(provider)
        error.value = null
        return res
    } catch (err) {
        console.log(err.message)
    }
}

const githubLogin = async () => {
    error.value = null
    try {
        const provider = new firebase.auth.GithubAuthProvider()
        let res = await auth.signInWithPopup(provider)
        error.value = null
        return res
    } catch (err) {
        console.log(err.message)
    }
}

const appleLogin = async () => {
    error.value = null
    try {
        const provider = new firebase.auth.OAuthProvider('apple.com')
        let res = await auth.signInWithPopup(provider)
        error.value = null
        return res
    } catch (err) {
        console.log(err.message)
    }
}

const emailRegister = async (displayName, email, password) => {
    error.value = null
    try {
        let res = await auth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete registration.')
        }
        error.value = null
        await res.user.updateProfile({ displayName })
        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const emailLogin = async (email, password) => {
    error.value = null
    try {
        let res = await auth.signInWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete login.')
        }
        error.value = null
        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const logout = async () => {
    error.value = null
    try {
        await auth.signOut()
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

export function useAuth() {
    return {
        user,
        googleLogin,
        githubLogin,
        appleLogin,
        emailRegister,
        emailLogin,
        logout,
        error,
    }
}
