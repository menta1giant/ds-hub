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

  const userData = (await DiscordRepo.getUserData()) as Object;

  const userDataStore = useUserData();
  userDataStore.setUserData(formatUserData(userData as User));

  router.push("/socket");
});
</script>
