<template src="./ISI.html"></template>

<script>
  export default {
    name: 'ISI',
    props: {
        currentSection: Number,
        isStatic: Boolean,
        isFixedHidden: Boolean,
    },
    components: {
    },
    data() {
      return {
        isOpen: false,
      }
    },
  }
</script>

<style src="./ISI.scss" lang="scss" scoped></style>