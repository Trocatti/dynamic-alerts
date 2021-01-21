<template>
  <b-modal centered hide-footer size="lg" v-model="modalShow" @close="close()">
    <template #modal-header="{ close }">
      <b-link @click="close()" class="ml-auto">
        <IconClose></IconClose>
      </b-link>
    </template>
    <slot name="octa-body"></slot>
  </b-modal>
</template>

<script>
  import { BModal, BLink } from 'bootstrap-vue'
  import IconClose from '@/components/IconClose'

  export default {
    name: 'modalComponent',
    components: { BModal, BLink, IconClose },
    props: {
      show: {
        type: Boolean,
        default: false,
        required: true
      }
    },
    data() {
      return {
        modalShow: false
      }
    },
    methods: {
      close() {
        this.$emit('close', false)
      }
    },
    created() {
      this.modalShow = this.show
    }
  }
</script>

<style lang="scss">
  .modal-content {
    border-radius: 19px;

    .modal-header {
      border-bottom: 0;
    }

    .modal-body {
      padding: 0 2rem 2rem 2rem;
    }
  }
</style>
