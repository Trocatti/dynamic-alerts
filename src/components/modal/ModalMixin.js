export default {
  components: {
    Modal: () => import('./Modal')
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
