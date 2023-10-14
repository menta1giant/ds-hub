<script setup lang="ts">
const { data: events } = await useFetch("/api/event");

const title = ref();
const description = ref();

const handleAddEvent = () => {
  $fetch("/api/event", {
    method: "POST",
    headers: {
      Authorization: "chagabum",
    },
    body: {
      title: title.value.value,
      description: description.value.value,
    },
  });
};
</script>

<template>
  <div>
    <article v-for="event in events" :key="event.title">
      <span>{{ event.hostId }}</span>
      <span>{{ event.title }}</span>
      <span>{{ event.description }}</span>
    </article>
    <input ref="title" />
    <input ref="description" />
    <button @click="handleAddEvent">Добавить событие</button>
  </div>
</template>
