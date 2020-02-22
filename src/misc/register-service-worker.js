import {register} from 'register-service-worker'


if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {

        },
        registered() {

        },
        cached() {

        },
        updatefound() {

        },
        updated() {

        },
        offline() {

        },
        error() {

        }
    })
}

if ('serviceWorker' in navigator) {
    let refreshing = false
    // This is triggered when a new service worker take over
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return
        refreshing = true

        window.location.reload()
    })
}
