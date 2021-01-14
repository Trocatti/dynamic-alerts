<template>
  <b-modal centered hide-footer size="lg" v-model="modalShow" @close="close()">
    <div class="octa-container">
      <span class="octa-title">Telefones desconectados</span>
      <span class="octa-subtitle">
        Os seguintes números estão desconectados, selecione e leia o QR CODE
        para reconectar.
      </span>
      <template v-for="(person, index) in params.numbers">
        <b-form-checkbox
          :key="index"
          :id="'checkbox-' + index"
          :name="'checkbox-' + index"
          size="lg"
          v-model="person['status']"
        >
          <div class="octa-content">
            <span class="octa-name">{{ person.name }}</span>
            <span class="octa-number">{{ person.number }}</span>
          </div>
        </b-form-checkbox>
      </template>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "whatsappDisconnectModal",
  props: {
    show: {
      type: Boolean,
      default: true,
      required: true
    },
    params: {
      type: Object
    }
  },
  data() {
    return {
      modalShow: false
    };
  },
  methods: {
    close() {
      this.$emit("update:show", !this.show);
    }
  },
  created() {
    this.modalShow = this.show;
  }
};
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
