<template>
  <b-modal
    centered
    hide-footer
    size="lg"
    v-model="modalShow"
    @close="handleClose"
  >
    <template #modal-header="{ close }">
      <b-link @click="close" class="ml-auto octa-close">
        <IconClose></IconClose>
      </b-link>
    </template>
    <slot></slot>
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
      handleClose() {
        this.$emit('close', false)
      }
    },

    mounted() {
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

<style lang="scss" scoped>
  .octa-close {
    stroke: #333333;
  }
</style>
