import socketio from "socket.io-client";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const socket = socketio(config.public.SOCKETS);

  return {
    provide: {
      socket,
    },
  };
});
