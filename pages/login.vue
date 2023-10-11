<script setup lang="ts">
import { getAuthLink } from "../utils/discordAuth";
const config = useRuntimeConfig();

const loginHref = getAuthLink(config.public.REDIRECT_URL);
</script>

<template>
  <a class="big-login-button" :href="loginHref">ЗАЛОГИНИТЬСЯ ЧЕРЕЗ ДИСКОРД</a>
</template>

<style lang="scss" scoped>
.big-login-button {
  padding: 1.5rem 3rem;
  font-size: 3rem;
}
</style>
