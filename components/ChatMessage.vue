<script setup lang="ts">
import type { ChatMessage } from '../types/chatMessage';

const props = defineProps<ChatMessage>()
</script>

<template>
  <div class="message" :class="{'message--sent': props.isMe}">
    <div>
      <span class="message__name">{{ props.name }}</span>
      <p>{{ props.message }}</p>
    </div>
    <img :src="props.avatar" width="64" height="64"/>
  </div>

</template>

<style lang="scss" scoped>
.message {
  display: flex;
  justify-content: flex-end;
  gap: .75rem;

  margin: 5px;
  padding: 10px;
  border-radius: 5px;

  p {
    font-weight: 400;
  }

  img {
    object-fit: cover;
  }

  &__name {
    font-weight: 500;
    font-size: 1.2em;
    color: var(--username-color)
  }

  &--sent {
    background-color: #007bff;
    color: white;
    text-align: right;
    --username-color: hsla(220, 90%, 90%);
  }

  &:not(&--sent) {
    flex-direction: row-reverse;

    background-color: #f0f0f0;
    color: #333;
    text-align: left;
    --username-color: hsla(220, 20%, 20%);
  }
}
</style>