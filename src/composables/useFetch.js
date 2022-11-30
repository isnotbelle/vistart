import { ref } from 'vue'

export function useFetch(url, options = {}) {
  const data = ref(null)
  const isLoading = ref(true)
  const isError = ref(false)
  const error = ref(null)

  try {
    fetch(url, {})
      .then((res) => res.json())
      .then((result) => {
        data.value = result
        isLoading.value = false
      })
  } catch (e) {
    isError.value = true
    error.value = e
  }

  return { data, isLoading, isError, error }
}
