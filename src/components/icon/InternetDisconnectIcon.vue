<template>
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="InternetDisconnectIcon"
  >
    <rect x="24" y="1" width="4" height="19" :fill="color" />
    <rect x="18" y="5" width="4" height="15" :fill="color" />
    <rect x="12" y="9" width="4" height="11" :fill="color" />
    <rect x="6" y="12" width="4" height="8" :fill="color" />
    <rect y="16" width="4" height="4" :fill="color" />
    <rect
      x="5.83325"
      width="1.6499"
      height="8.2495"
      transform="rotate(45 5.83325 0)"
      :fill="color"
    />
    <rect
      x="7"
      y="5.83337"
      width="1.6499"
      height="8.2495"
      transform="rotate(135 7 5.83337)"
      :fill="color"
    />
  </svg>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: '#333333'
      }
    }
  }
</script>
