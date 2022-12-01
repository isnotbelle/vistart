# Vistart

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Getting started

```sh
# install dependencies
npm install

# run development server
npm run dev
```

* [Vite](https://vitejs.dev)
* [Vue 3](https://vuejs.org)
* [File-based-routing](https://github.com/hannoeru/vite-plugin-pages)
* [Basic custom components](#basic-custom-components)
* [useFetch composable](#usefetch-composable)

## Basic custom components

There are a few basic custom components: `Layout`, `Navigation`, and `Title`.

### Layout

This component is only used once in the `App.vue` to provide a unified template for the application.
It contains the `<Navigation>`, which is the same on all pages as well.

### Navigation

This component is only used once in the `Layout.vue` to provide a unified navigation bar.
The links are specified at the top and when a link is active, the class `router-link-active` is applied automatically, which can be used to style active links differently.

### Title

This component can be used on each page to provide a unified page title. Simply put the title of the page as content. As a result, the styling has to be done only once.

```vue
<script setup>
import Title from '@/components/Title.vue'
</script>

<template>
  <Title>Home</Title>
</template>
```

## `useFetch` composable

The `useFetch` composable can be used to easily fetch data.

```vue
<script setup>
import { useFetch } from '@/composables/useFetch'

const { data, isLoading, error } = useFetch('https://...')
</script>

<template>
  <div v-if="isLoading">
    Data is being loaded...
  </div>
  <div v-else>
    {{ data }}
  </div>
  <div v-if="error !== null">
    {{ error }}
  </div>
</template>
```

It returns the following refs:

* `data`: The returned and parsed JSON data.
* `isLoading`: Whether the data is still loading.
* `error`: The error that occured or `null`.
