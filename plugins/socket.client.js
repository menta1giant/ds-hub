import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
    const socket = io('http://localhost:443')

    return {
        provide: {
            socket: socket
        }
    }
})