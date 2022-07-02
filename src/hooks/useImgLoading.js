import { ref } from 'vue'

export default function () {
  let loading = ref(true)

  return { loading }
}
