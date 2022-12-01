<script setup>
import { computed, toRefs } from 'vue'
import { useFetch } from '@/composables/useFetch'
import Title from '@/components/Title.vue'

const props = defineProps({
  id: String,
})

const { id } = toRefs(props)
const url = computed(() => `https://jsonplaceholder.typicode.com/users/${id.value}`)

const { data, isLoading } = useFetch(url)
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <router-link to="/users">&larr; Back</router-link>
    <Title>@{{ data.username }}</Title>
    <code>
      <pre>{{ JSON.stringify(data, null, 2) }}</pre>
    </code>
  </div>
</template>

<style scoped>
a {
  display: block;
  color: rgb(0, 0, 255);
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 25px;
}

a:hover {
  text-decoration: underline;
}
</style>
