<template>
  <div class="headerWrapper">
    <div class="header">
      <div class="header__left">
        <img :src="logo" alt="Taltz logo" />
      </div>
      <div class="header__right">
        <nav>
          <ul class="desktopMenu">
            <li v-for="link in menuItem" :key="link.id" v-html="link.anchorText" @click="scrollTo(link.anchor,link.anchorText)" :class="currentSection == link.anchorText ? 'active' : ''"></li>
          </ul>
        </nav>
        <div class="pi">
          <img :src="pdfIconDesktop" alt="icon">
          <span v-html="piText"></span>
        </div>
      </div>
      <div class="dropDown">
        <img :src="menuIcon" alt="menu icon" @click="showDropdown = !showDropdown" />
      </div>
    </div>
    <div class="mobileMenu" v-show="showDropdown">
      <ul>
        <li v-for="link in menuItem" :key="link.id" v-html="link.anchorText" @click="scrollTo(link.anchor,link.anchorText)"></li>
      </ul>
      <div class="pi">
        <img :src="pdfIconMobile" alt="icon">
        <span v-html="piText"></span>
      </div>
    </div>
    <div class="sectionHighlight" v-show="currentSection != ''" v-html="currentSection"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showDropdown: false,
      currentSection: 'ACR Results',
      logo: require("@/Assets/Img/logos/logo-taltz.svg"),
      menuIcon: require("@/Assets/Img/icons/icon-menu.svg"),
      menuItem: [
        {
          id: 1,
          anchorText: "ACR Results",
          anchor: "ACR",
        },
        {
          id: 2,
          anchorText: "Joint Symptom Results",
          anchor: "Joint",
        },
        {
          id: 3,
          anchorText: "Access & Support",
          anchor: "Access",
        },
      ],
      piText: 'Prescribing Information',
      pdfIconDesktop: require('@/Assets/Img/icons/icon-pdf.svg'),
      pdfIconMobile: require('@/Assets/Img/icons/icon-pdf-mobile.svg')
    };
  },
  methods: {
    scrollTo(id, anchorText) {
        const el = document.getElementById(id);
        el.scrollIntoView({behavior: "smooth"});
        this.showDropdown = !this.showDropdown;
        this.currentSection = anchorText;
    }
  }
};
</script>

<style src="./Header.scss" lang="scss" scoped></style>