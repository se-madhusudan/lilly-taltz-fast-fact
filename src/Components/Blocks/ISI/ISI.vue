<template src="./ISI.html"></template>

<script>
  export default {
    name: 'ISI',
    props: {
        isiData: Object,
        footerData: Object,
        currentSection: Number,
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