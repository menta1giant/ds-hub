<script setup lang="ts">
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  if (!route.query.code) useHandleFailedAuth();

  try {
    await AuthRepo.discordAuth(route.query.code as string);
  } catch (e) {
    useHandleFailedAuth();
  }

  const userData = (await DiscordRepo.getUserData()) as User;

  const userDataStore = useUserData();
  userDataStore.setUserData(formatUserData(userData));

  router.push("/socket");
});
</script>

<template>
  <main></main>
</template>
