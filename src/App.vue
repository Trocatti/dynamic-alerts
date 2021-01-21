<template>
  <div id="app">
    <alert :notifications="notifications" />
  </div>
</template>

<script>
  import store from './store'

  import Alert from '@/components/Alert'

  export default {
    name: 'app',
    components: {
      Alert
    },
    computed: {
      notifications() {
        return store
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    justify-content: center;
    width: 400px;
    height: 100vh;
    overflow-y: scroll;
    padding-top: 20px;
    background-color: whitesmoke;
  }
</style>
