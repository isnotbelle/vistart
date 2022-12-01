<script setup>
import Title from '@/components/Title.vue'
import { useFetch } from '@/composables/useFetch'

const url = 'https://jsonplaceholder.typicode.com/users'
const { data, isLoading, error } = useFetch(url)
</script>

<template>
  <Title>Users</Title>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error !== null || data === null">
      There was an error loading the data.
    </div>
    <div v-else class="user-container">
      <div v-for="user in data" :key="user.id" class="user">
        <router-link :to="`/users/${user.id}`" class="link">@{{ user.username }}</router-link>
        <div class="details">
          <div><b>Name:</b> {{ user.name }}</div>
          <div><b>Email:</b> {{ user.email }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-direction: column;
  gap: 15px;
}

.user {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.link {
  display: block;
  color: rgb(0, 0, 255);
  font-weight: bold;
  font-size: 1.1rem;
  padding-bottom: 10px;
}

.details {
  font-size: 1rem;
}
</style>
