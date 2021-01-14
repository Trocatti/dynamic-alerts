<template>
  <svg
    width="28"
    height="19"
    viewBox="0 0 28 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="24" width="4" height="19" :fill="color" />
    <rect x="18" y="4" width="4" height="15" :fill="color" />
    <rect x="12" y="8" width="4" height="11" :fill="color" />
    <rect x="6" y="11" width="4" height="8" :fill="color" />
    <rect y="15" width="4" height="4" :fill="color" />
  </svg>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "white"
    }
  }
};
</script>
