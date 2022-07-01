import { ref } from 'vue'

// 图片加载方法
export default function () {
  let loading = ref(true)

  const determinePictureLoading = function () {
    console.log('加载完咯')
    // loading.value = false
  }

  return { loading, determinePictureLoading }
}
