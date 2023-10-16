<template>
  <div>
    <header>
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/socket">Socket</a>
      <a href="/events-list">Events</a>
    </header>
    <main><slot /></main>
  </div>
</template>

<style lang="scss" scoped>
header {
  a {
    margin: 0 1rem;
  }

  padding-block: 2rem;
}
</style>
