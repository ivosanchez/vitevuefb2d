import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { format, formatDistanceToNow } from 'date-fns'

import { auth } from './composables/firebase/firebase'

import './index.css'

let app

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)

        app.config.globalProperties.$filters = {
            prettyDate(timestamp) {
                if (timestamp) {
                    return format(
                        timestamp.toDate(),
                        'E MMM dd, yyyy @ hh:mm aa'
                    )
                }
            },
            relativeDate(timestamp) {
                if (timestamp) {
                    return formatDistanceToNow(timestamp.toDate())
                }
            },
        }

        app.use(router).mount('#app')
    }
})
