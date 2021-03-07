# vite-starter-todos

A starter template for Vite/Firebase/Tailwind projects.

See [demo](https://vite-starter-todo.web.app)

Much thanks to Evan You (@yyx990803), @antfu, @adamwathan for building such great stuff.

And @iamshaunjp for being such a good teacher.


### Includes

-   Vite
-   Vue 3
-   Vue Router
-   Firebase
-   Tailwind (including Tailwind Forms)
-   Date-fns for date handling
-   Vite-plugin-components for automatic component registration
-   Vite-plugin-pages for file based routing
-   Vite-plugin-icons for auto import of Iconify icons with purging

### Functionality

-   All interactions with Firebase handled via composables
-   Firebase authentication using email/password, Google, Github, and Apple
-   Automatic creation of a new profile when new user registers
-   App.vue provides Profile that can be injecting in any component
-   @ is an alias for src directory
-   Simple nav bar with user pull down menu
-   Basic todo management including real-time listener
-   A couple of date filters for formatting Firestore timestamps
-   A couple of routes guards to direct authenticated/unauthenticated users
-   A base input and base slide down component

### To Use

-   Clone repo
-   Run Yarn to install deps
-   add config.js file with your own Firebase project config
-   Make desired updates to tailwind.config.js and index.css for overall styling defaults
-   Run Yard Dev for fast dev server
-   Run Yarn Build to deploy
