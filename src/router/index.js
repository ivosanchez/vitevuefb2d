import { createWebHistory, createRouter } from 'vue-router'
import routes from 'pages-generated'
import { auth } from '../composables/firebase/firebase'

const history = createWebHistory()

const router = createRouter({ history, routes })

// directs unauth users to login page
router.beforeEach((to, from, next) => {
    let user = auth.currentUser
    if (!to.meta.noAuth && !user) {
        next('welcome')
    } else {
        next()
    }
})

// directs auth users to todos page
router.beforeEach((to, from, next) => {
    let user = auth.currentUser
    if (to.meta.noAuth && user) {
        next('/')
    } else {
        next()
    }
})

export default router
