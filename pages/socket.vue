<script setup lang="ts">
// TODO Refactor component

const { $socket } = useNuxtApp();
const { userData } = useUserData();

const input = ref();
const messages = ref<ChatMessage[]>([]);

const handleSendMessage = () => {
  if (!userData.id) return;

  const message: ChatMessage = {
    author: userData,
    message: input.value.value,
  };

  input.value.value = "";

  messages.value.push(message);

  $socket.emit("send-message", message);
};

$socket.on("broadcast-message", (message: ChatMessage) => {
  messages.value.push(message);
});

onMounted(async () => {
  const messagesList: ChatMessage[] = await $fetch("/api/message").then(
    (data) =>
      data.map((message: { author: { id: string }; content: string }) => ({
        message: message.content,
        author: message.author,
      })),
  );

  messages.value.push(...messagesList);
});
</script>

<template>
  <div class="chat-container">
    <div class="messages">
      <ChatMessage
        v-for="message in messages"
        :key="generateRandomHashString(message.name)"
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
      <button id="send-button" @click="handleSendMessage">Send</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-container {
  min-width: 18rem;
  max-width: 64rem;
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
