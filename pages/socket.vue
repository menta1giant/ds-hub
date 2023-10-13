<script setup lang="ts">
// TODO Refactor component

import type { ChatMessage } from "../types/chatMessage";
const { $socket } = useNuxtApp() as any;
const userDataStore = useUserData();
const { userData } = userDataStore;

const input = ref();
const messages = ref<ChatMessage[]>([]);

const onClick = () => {
  if (!userData.name) return;

  const message = {
    name: userData.name,
    avatar: userData.avatar,
    isMe: true,
    message: input.value.value,
  };

  input.value.value = "";

  messages.value.push(message);

  $socket.emit("send-message", message);
};

$socket.on("broadcast-message", (message: ChatMessage) => {
  messages.value.push(Object.assign({}, message, { isMe: false }));
});
</script>

<template>
  <div class="chat-container">
    <div class="messages">
      <ChatMessage
        v-for="message in messages"
        :key="generateRandomString(message.name)"
        v-bind="{ ...message }"
      ></ChatMessage>
    </div>
    <div class="input-container">
      <input
        id="message-input"
        ref="input"
        type="text"
        placeholder="Type your message..."
      />
      <button id="send-button" @click="onClick">Send</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-container {
  width: 60vw;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.messages {
  height: 50vh;
  overflow-y: auto;
  margin-bottom: 10px;
}

.input-container {
  display: flex;
}

#message-input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#send-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
}

#send-button:hover {
  background-color: #0056b3;
}
</style>
