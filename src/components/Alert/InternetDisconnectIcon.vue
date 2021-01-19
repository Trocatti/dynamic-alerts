<template>
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    :fill="params.color"
    xmlns="http://www.w3.org/2000/svg"
    id="InternetDisconnectIcon"
  >
    <rect x="24" y="1" width="4" height="19" />
    <rect x="18" y="5" width="4" height="15" />
    <rect x="12" y="9" width="4" height="11" />
    <rect x="6" y="12" width="4" height="8" />
    <rect y="16" width="4" height="4" />
    <rect
      x="5.83325"
      width="1.6499"
      height="8.2495"
      transform="rotate(45 5.83325 0)"
    />
    <rect
      x="7"
      y="5.83337"
      width="1.6499"
      height="8.2495"
      transform="rotate(135 7 5.83337)"
    />
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
