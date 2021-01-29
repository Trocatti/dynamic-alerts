<template>
  <modal :show="modal.show" @close="close">
    <template>
      <div class="octa-container">
        <span class="octa-title">Telefones desconectados</span>
        <span class="octa-subtitle">
          Os seguintes números estão desconectados, selecione e leia o QR CODE
          para reconectar.
        </span>
        <template v-for="(number, index) in modal.params.numbers">
          <b-form-checkbox
            size="lg"
            :key="index"
            :id="'checkbox-' + index"
            :name="'checkbox-' + index"
            v-model="number['status']"
          >
            <div class="octa-content">
              <span class="octa-name">{{ number.name }}</span>
              <span class="octa-number">{{ number.phone }}</span>
            </div>
          </b-form-checkbox>
        </template>
      </div>
    </template>
  </modal>
</template>

<script>
  import { BFormCheckbox } from 'bootstrap-vue'

  import Modal from './index.vue'

  export default {
    name: 'whatsappDisconnectModal',

    components: {
      BFormCheckbox,
      Modal
    },

    props: {
      modal: {
        type: Object,
        required: true
      }
    },

    methods: {
      close(show) {
        this.$emit('close', show)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .octa-container {
    display: flex;
    flex-direction: column;

    .octa-title {
      font-weight: 700;
      font-size: 1.25rem;
      color: #4c4c4c;
      margin-bottom: 10px;
    }

    .octa-subtitle {
      font-size: 0.875rem;
      color: rgba($color: #000000, $alpha: 0.5);
      margin-bottom: 20px;
    }

    .octa-content {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      .octa-name {
        font-weight: 500;
        font-size: 0.875rem;
        margin-right: 10px;
      }

      .octa-number {
        font-size: 0.75rem;
      }
    }
  }
</style>
