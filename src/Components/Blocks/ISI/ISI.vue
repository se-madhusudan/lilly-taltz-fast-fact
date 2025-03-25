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
    methods:  {
      toogleIsi () {
        this.isOpen = !this.isOpen;
        const body = document.getElementsByTagName('body')[0];
        console.log('isOpen: ', this.isOpen)
        if(this.isOpen) {
          console.log('isOpen: ', this.isOpen)
          body.style.overflowY = 'hidden';
        } else {
          body.style.overflowY = 'auto';
        }
      }
    }
  }
</script>

<style src="./ISI.scss" lang="scss" scoped></style>