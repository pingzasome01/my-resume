<template>
  <Vue3Lottie :loop="1" :animationData="lottie2" :height="400" :width="400" :speed="0.2" />
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import lottie2 from '../components/json/lottie2.json'

export default {
  components: {
    Vue3Lottie
  },
  data() {
    return {
      lottie2
    }
  }
}
</script>
