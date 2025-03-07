<template>
  <div id="app" :class="{ screentest: userAgent.screentest, isIE: isIE}">
    <section :class="{ 'main-wrapp': true}">
      <header>
        <header-top />
        <header-block :navData="navData" @scroll="scrollTo" />
      </header>
      <main>
        <router-view />
      </main>
      <rotate-lock v-if="userAgent.orientation === 'landscape' && userAgent.device.isPhone"></rotate-lock>
      <footer>
        <brand-footer :navData="navData" @scroll="scrollTo" />
      </footer>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import handleResize from "@/mixins/handleResize";
import handleOrientation from "@/mixins/handleOrientation";
import fixSafariOffset from "@/mixins/fixSafariOffset";
import { NoParentScrollMixin } from "@/mixins/NoParentScrollMixin";
import HeaderBlock from "@/Components/Layouts/Header/Header";
import HeaderTop from "@/Components/Layouts/Header/HeaderTop";
import BrandFooter from "@/Components/Layouts/Brand/BrandFooter";
import rotateLock from "@/Components/common-blocks/rotate-lock/rotate-lock";
import ClickAnalytics from "@/mixins/ClickAnalytics";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  name: "App",
  components: {
    "rotate-lock": rotateLock,
    "header-top": HeaderTop,
    "header-block": HeaderBlock,
    BrandFooter,
    basePath: process.env.BASE_URL,
  },
  data() {
    return {
      navData: {
        showDropdown: false,
        currentSection: 0,
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
      piData: {
        piText: 'Prescribing Information',
        url: 'https://www.cancertherapy.com',
        pdfIconDesktop: require('@/Assets/Img/icons/icon-pdf.svg'),
        pdfIconMobile: require('@/Assets/Img/icons/icon-pdf-mobile.svg')
      }
      }
    }
  },
  beforeMount() {
    this.$store.commit(
      "UPDATE_SCREENTEST",
      this.$route.query.screentest || process.env.VUE_APP_SCREENTEST
    );
  },

  mixins: [
    handleResize,
    handleOrientation,
    fixSafariOffset,
    NoParentScrollMixin,
    ClickAnalytics,
  ],

  computed: {
    ...mapState(["userAgent"]),
    isIE() {
      return this.userAgent.browser.name === "ie";
    },
    orientation() {
      return this.userAgent.orientation;
    },
    brandFooterHeight() {
      return this.userAgent.width < 1024 ? 38 : 50;
    },
  },
  methods: {
    scrollTo(id, anchorText) {
      const el = document.getElementById(id);
      el.scrollIntoView({behavior: "smooth"});
      this.navData.showDropdown = !this.navData.showDropdown;
      this.navData.currentSection = anchorText;
    }
  },
  mounted() {
    var sectionviewarray = [".hero","#ACR","#Joint", "#Access"];
    for (let i = 0; i < sectionviewarray.length; i++) {
      ScrollTrigger.create({
        trigger: sectionviewarray[i],
        start: "top 20%",
        end: "top 20%",
        toggleActions: "restart pause reverse pause",
        onEnterBack: () => {
          var currentsection = i - 1;
          this.navData.currentSection = currentsection;
          if (currentsection == 1 || currentsection == 2 || currentsection == 3) {
            document.querySelector(".sectionHighlight").classList.add('active');
          }
          else {
            document.querySelector(".sectionHighlight").classList.remove('active');
          } 
        },
        onEnter: () => {
          this.navData.currentSection = i;
          if (i == 1 || i == 2 || i == 3) {
            document.querySelector(".sectionHighlight").classList.add('active');
          }
          else {
            document.querySelector(".sectionHighlight").classList.remove('active');
          }
        },
      });
    }
  },
};
</script>

<style lang="scss" src="./Styles/Main.scss"></style>