<template>
  <div class="headerTop">
    <img
      v-for="item in headerTop"
      :key="item.id"
      :src="item.logo"
      :alt="item.alt"
    />
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      headerTop: [
        {
          id: 1,
          logo: require("@/Assets/Img/logos/logo-rheumatology-advisor.svg"),
          alt: "Rheumatology Advisor logo",
        },
        {
          id: 2,
          logo: require("@/Assets/Img/logos/logo-fast-facts.svg"),
          alt: "Fast Facts logo",
        },
      ],
    };
  },
};
</script>

<style src="./HeaderTop.scss" lang="scss" scoped></style>