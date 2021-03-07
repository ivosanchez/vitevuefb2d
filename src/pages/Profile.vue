<template>
    <div>
        <p class="text-3xl text-teal-700 my-8 font-serif">My Profile</p>
        <div v-if="profile" class="mt-4 space-y-6">
            <base-input
                type="text"
                label="Display Name"
                v-model.trim="profile.displayName"
                :error="validationErrors.displayName"
            />
            <base-input
                type="text"
                label="Email Address"
                v-model.trim="profile.email"
                :error="validationErrors.email"
            />

            <div class="block">
                <span class="text-gray-700">Mobile Phone Number</span>
                <input
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring focus:ring-teal-600 focus:ring-opacity-50"
                    type="tel"
                    v-model="profile.phoneNumber"
                />
                <p class="text-sm text-red-500">{{ validationErrors.phone }}</p>
            </div>
        </div>
        <div class="mt-16 flex space-x-8">
            <button @click="$router.push('/todos')" class="btn-white">
                Cancel
            </button>
            <button @click="validateProfileForm" class="btn-teal">
                Save Profile
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/firebase/useAuth'
import { useProfile } from '@/composables/firebase/useProfile'

export default {
    setup() {
        const router = useRouter()
        const validationErrors = ref({
            phone: '',
            displayName: '',
            email: '',
        })
        const validForm = ref(false)
        const { user } = useAuth()
        const { profile, saveProfile, error, loading } = useProfile()

        const validateProfileForm = () => {
            ;(validationErrors.value = {
                phone: '',
                displayName: '',
                email: '',
            }),
                (validForm.value = true)

            if (!profile.value.phoneNumber) {
                validForm.value = false
                validationErrors.value.phone = 'Valid phone number is required'
            }
            if (!profile.value.displayName) {
                validForm.value = false
                validationErrors.value.displayName = 'Display name is required.'
            }
            if (profile.value.email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!re.test(profile.value.email)) {
                    validForm.value = false
                    validationErrors.value.email = 'Not a valid email.'
                }
            } else {
                validForm.value = false
                validationErrors.value.email = 'Email is required.'
            }
            if (validForm.value) {
                processForm()
            } else return
        }

        function processForm() {
            saveProfile(profile.value)
            router.push('/')
        }

        return {
            validationErrors,
            validateProfileForm,
            profile,
            error,
            loading,
        }
    },
}
</script>
