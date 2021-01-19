<template>
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="CloseIcon"
  >
    <path
      d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19Z"
      :fill="background"
      fill-opacity="0.3"
    />
    <path
      d="M13 13L6 6"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 13L13 6"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
  export default {
    props: {
      background: {
        type: String,
        default: 'black'
      },
      color: {
        type: String,
        default: 'white'
      }
    }
  }
</script>
