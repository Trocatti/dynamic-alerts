<template>
  <modal :show="modalShow" @close="close">
    <template #octa-body>
      <div class="octa-container">
        <span class="octa-title">Telefones desconectados</span>
        <span class="octa-subtitle">
          Os seguintes números estão desconectados, selecione e leia o QR CODE
          para reconectar.
        </span>
        <template v-for="(number, index) in numbers">
          <b-form-checkbox
            :key="index"
            :id="'checkbox-' + index"
            :name="'checkbox-' + index"
            size="lg"
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
  import ModalMixin from '@/components/Modal/mixin'
  export default {
    name: 'whatsappDisconnectModal',
    mixins: [ModalMixin],
    props: {
      numbers: {
        type: Array
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
