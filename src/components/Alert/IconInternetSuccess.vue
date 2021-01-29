<template>
  <svg
    width="28"
    height="19"
    viewBox="0 0 28 19"
    :fill="params.color"
    xmlns="http://www.w3.org/2000/svg"
    id="InternetSuccessIcon"
  >
    <rect x="24" width="4" height="19" />
    <rect x="18" y="4" width="4" height="15" />
    <rect x="12" y="8" width="4" height="11" />
    <rect x="6" y="11" width="4" height="8" />
    <rect y="15" width="4" height="4" />
  </svg>
</template>
<script>
  export default {
    props: {
      params: {
        type: Object,
        default: () => ({
          color: 'none'
        })
      }
    }
  }
</script>
