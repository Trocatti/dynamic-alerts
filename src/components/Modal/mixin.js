import Modal from './index.vue'

export default {
  components: {
    Modal
  },
  props: {
    modalShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    close(show) {
      this.$emit('update:modalShow', show)
    }
  }
}
