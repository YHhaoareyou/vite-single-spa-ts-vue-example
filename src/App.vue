<template>
  <img alt="Vue logo" :src="logo" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import logo from './assets/logo.png'
import parsePublicAssetsPath from './utils/parse-public-assets-path'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      logo: parsePublicAssetsPath(logo)
    }
  }
}
</script>
