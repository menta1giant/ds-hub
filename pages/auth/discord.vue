<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const data = ref<{ username?: string }>({});

onMounted(async () => {
  await AuthRepo.discordAuth(route.query.code as string);

  const userData = (await DiscordRepo.getUserData()) as Object;
  data.value = userData;

  const userDataStore = useUserData();
  userDataStore.setUserData(formatUserData(userData as User));

  router.push("/socket");
});
</script>

<template>
  <div>{{ data?.username }}</div>
</template>
