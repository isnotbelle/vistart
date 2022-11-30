<script setup>
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <div>
    <Navigation />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 50px;
}
</style>
