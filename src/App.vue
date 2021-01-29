<template>
  <div id="app">
    <alert :alerts="notifications" @handleModal="modal = $event">
      <template #ModalWhatsAppDisconnect>
        <modal-whats-app-disconnect
          v-if="wppDisconnect"
          :modal="wppDisconnect"
          @close="wppDisconnect.show = $event"
        ></modal-whats-app-disconnect>
      </template>

      <template #ModalWhatsAppDisconnect2>
        <modal-whats-app-disconnect2
          v-if="wppDisconnect2"
          :modal="wppDisconnect2"
          @close="wppDisconnect2.show = $event"
        ></modal-whats-app-disconnect2>
      </template>

      <template #ModalWhatsAppDisconnect3>
        <modal-whats-app-disconnect3
          v-if="wppDisconnect3"
          :modal="wppDisconnect3"
          @close="wppDisconnect3.show = $event"
        ></modal-whats-app-disconnect3>
      </template>
    </alert>
  </div>
</template>

<script>
  import store from './store'

  import Alert from '@/components/Alert'

  export default {
    name: 'app',

    components: {
      Alert,
      ModalWhatsAppDisconnect: () =>
        import('@/components/Modal/ModalWhatsAppDisconnect'),
      ModalWhatsAppDisconnect2: () =>
        import('@/components/Modal/ModalWhatsAppDisconnect'),
      ModalWhatsAppDisconnect3: () =>
        import('@/components/Modal/ModalWhatsAppDisconnect')
    },

    computed: {
      notifications() {
        return store
      },

      wppDisconnect() {
        return this.modalRef('ModalWhatsAppDisconnect')
      },

      wppDisconnect2() {
        return this.modalRef('ModalWhatsAppDisconnect2')
      },

      wppDisconnect3() {
        return this.modalRef('ModalWhatsAppDisconnect3')
      }
    },

    data() {
      return {
        modal: {}
      }
    },

    methods: {
      modalRef(modalname) {
        return this.modal[modalname]
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
