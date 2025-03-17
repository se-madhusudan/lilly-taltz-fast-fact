<template src="./ISI.html"></template>

<script>
  import BrandFooter from "@/Components/Layouts/Brand/BrandFooter";
  export default {
    name: 'ISI',
    props: {
        isiData: Object,
        footerData: Object
    },
    components: {
      BrandFooter,
    },
    data() {
      return {
        isOpen: false,
      }
    },
  }
</script>

<style src="./ISI.scss" lang="scss" scoped></style>