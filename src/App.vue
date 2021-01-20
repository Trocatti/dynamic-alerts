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
