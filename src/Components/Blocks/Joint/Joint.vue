<template src="./Joint.html"></template>

<script>
  import Graph from '@/Components/Blocks/Graph/Graph';
  export default {
    name: 'Joint',
    props: {
      jointData : Object
    },
    components: {
      Graph,
    }
  }
</script>

<style src="./Joint.scss" lang="scss" scoped></style>