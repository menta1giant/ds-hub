<script setup lang="ts">
  const loginHref = 'https://discord.com/api/oauth2/authorize?client_id=1161273721026261115&redirect_uri=http%3A%2F%2Flocalhost%3A9997%2Fauth%2Fdiscord&response_type=code&scope=identify%20guilds'
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