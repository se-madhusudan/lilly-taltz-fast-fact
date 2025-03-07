<template>
  <div class="headerWrapper">
    <div class="header">
      <div class="header__left">
        <img :src="logo" alt="Taltz logo" />
      </div>
      <div class="header__right">
        <nav>
          <ul class="desktopMenu">
            <li v-for="link in navData.menuItem" :key="link.id" v-html="link.anchorText" @click="emitScroll(link.anchor,link.anchorText)" :class="{ active: navData.currentSection == link.id }"></li>
          </ul>
        </nav>
        <div class="pi">
          <img :src="navData.piData.pdfIconDesktop" alt="icon">
          <a :href="navData.piData.url" v-html="navData.piData.piText" target="_blank"></a>
        </div>
      </div>
      <div class="dropDown">
        <img :src="menuIcon" alt="menu icon" @click="navData.showDropdown = !navData.showDropdown" />
      </div>
    </div>
    <div class="mobileMenu" v-show="navData.showDropdown">
      <ul>
        <li v-for="link in navData.menuItem" :key="link.id" v-html="link.anchorText" @click="emitScroll(link.anchor,link.anchorText)"></li>
      </ul>
      <div class="pi">
        <img :src="navData.piData.pdfIconMobile" alt="icon">
        <a :href="navData.piData.url" target="_blank" v-html="navData.piData.piText"></a>
      </div>
    </div>
    <div class="sectionHighlight">
      <ul>
          <li v-for="link in navData.menuItem" :key="link.id" :class="{ active: navData.currentSection == link.id }" v-html="link.anchorText"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    navData: Object,
  },
  data() {
    return {
      // showDropdown: false,
      // currentSection: '',
      logo: require("@/Assets/Img/logos/logo-taltz.svg"),
      menuIcon: require("@/Assets/Img/icons/icon-menu.svg"),
    };
  },
  methods: {
    // scrollTo(id, anchorText) {
    //   const el = document.getElementById(id);
    //   el.scrollIntoView({behavior: "smooth"});
    //   this.showDropdown = !this.showDropdown;
    //   this.currentSection = anchorText;
    // }

    emitScroll(anchor, anchorText) {
      this.$emit('scroll', anchor, anchorText);
    }
  }
};
</script>

<style src="./Header.scss" lang="scss" scoped></style>