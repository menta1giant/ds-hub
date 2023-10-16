<script setup lang="ts">
const { data: events } = await useFetch("/api/event");

console.log(events);

const title = ref();
const description = ref();

const subscribeToEvent = () => {
  console.log("cool");
};

const handleAddEvent = () => {
  $fetch("/api/event", {
    method: "POST",
    headers: {
      Authorization: "chagabum",
    },
    body: {
      event: {
        id: "12345",
        name: title.value.value,
        scheduledStartTimestamp: new Date().toISOString(),
        guildId: "123",
        description: description.value.value,
      },
    },
  });
};
</script>

<template>
  <div class="event-list">
    <article v-for="event in events" :key="event.id" class="event">
      <div class="event-header">
        <h2>{{ event.title }}</h2>
        <p class="hosted-by">Hosted by: {{ event.host.name }}</p>
      </div>
      <p class="event-description">{{ event.description }}</p>
      <p class="event-date">Date: {{ event.date }}</p>
      <p class="interested-count">Interested: {{ event.players.length }}</p>
      <button class="subscribe-button" @click="subscribeToEvent">
        Subscribe
      </button>
    </article>
    <input ref="title" />
    <input ref="description" />
    <button @click="handleAddEvent">Добавить событие</button>
  </div>
</template>

<style scoped>
.event-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.event {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #f7f7f7;
}

.event-header h2 {
  font-size: 24px;
  margin: 0;
}

.hosted-by {
  color: #666;
}

.event-description {
  margin-top: 10px;
}

.event-date {
  margin-top: 10px;
}

.interested-count {
  margin-top: 10px;
  font-weight: bold;
}

.subscribe-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}

.subscribe-button:hover {
  background-color: #2980b9;
}
</style>
