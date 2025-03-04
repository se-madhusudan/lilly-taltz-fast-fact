<template src="./ACR.html"></template>

<script>
  import Graph from '@/Components/Blocks/Graph/Graph';

  export default {
    name: 'ACR',
    props: {
        acrData: Object,
    },
    components: {
      Graph,
    },
    methods: {
      scrollToAnchor(anchor) {
        if (window.innerWidth > 1024) {
          this.$scrollTo(anchor, { offset: - 120 });
        } else {
          this.$scrollTo(anchor, { offset: - 75 });
        }
      }
    }
  }
</script>

<style lang="scss" src="./ACR.scss" scoped></style>