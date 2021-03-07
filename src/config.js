const firebaseConfig = {
    apiKey: 'AIzaSyDYBkGf8z60N73pachFitvm21PknlSbarQ',
    authDomain: 'vite-starter-todo.firebaseapp.com',
    projectId: 'vite-starter-todo',
    storageBucket: 'vite-starter-todo.appspot.com',
    messagingSenderId: '1016862806937',
    appId: '1:1016862806937:web:0a65a473ad14145f0f3908',
}

export function useConfig() {
    return { firebaseConfig }
}
