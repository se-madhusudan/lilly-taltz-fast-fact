<template>
    <div id="app" :class="{ screentest: userAgent.screentest, isIE: isIE}">
      <section :class="{ 'main-wrapp': true}">
        <header>
          <header-top />
          <header-block />
        </header>
        <main>
          <router-view />
          <Isi :hideElement="hideIsi" :fixed="true" />
          <Isi :static="true" />
        </main>
        <rotate-lock v-if="userAgent.orientation === 'landscape' && userAgent.device.isPhone"></rotate-lock>
        <footer>
          <brand-footer />
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
  import Isi from "@/Components/Blocks/Isi/Isi";
  import ClickAnalytics from "@/mixins/ClickAnalytics";
  import ScrollTrigger from "gsap/ScrollTrigger";
  export default {
    name: "App",
    components: {
      "rotate-lock": rotateLock,
      "header-top": HeaderTop,
      "header-block": HeaderBlock,
      BrandFooter,
      Isi,
      basePath: process.env.BASE_URL,
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
  
    data() {
      return {
        onBottom: false,
        pageBottomPosition: null,
        hideIsi: false,   
      };
    },
  
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
      closeMenu() {
        this.$store.commit("TOGGLE_MOBILE_MENU", false);
      },
      checkOnBottom() {
        this.hideIsi =
          document.querySelector(".isi").getBoundingClientRect().top >=
          document.querySelector(".isi.isi-static").getBoundingClientRect().top -
          this.brandFooterHeight;
          const pageHeight = document.body.scrollHeight;
          const pagePartHeight = pageHeight / 10
      },
  
    },
    mounted() {
      document.addEventListener('scroll',() => {    
        this.checkOnBottom();
      });  
  
      var sectionviewarray = [".heroSection","#ACRResults","#JointSymptomResults", "#AccessSupport", "#brandFooter"];
      var sectionviewpagename = ["ACRResults", "JointSymptomResults", "AccessSupport"];
      var sectionviewSECTIONname = ["-","-","-"];
     for (let i = 0; i < sectionviewarray.length; i++) {
      if(i == 0){
        ScrollTrigger.create({
            trigger: sectionviewarray[i],
            start: "center 30%",
            end: "center 30%",
            toggleActions: "restart pause reverse pause",
            onEnterBack: () => {
                    this.sectionClickDataLayer(sectionviewpagename[i],'section-view', sectionviewSECTIONname[i]);
            },
            onEnter: () => {
                    this.sectionClickDataLayer(sectionviewpagename[i],'section-view', sectionviewSECTIONname[i]);
            },
        });
      }else{
      ScrollTrigger.create({
            trigger: sectionviewarray[i],
            start: "top 30%",
            end: "top 30%",
            toggleActions: "restart pause reverse pause",
            onEnterBack: () => {
                    this.sectionClickDataLayer(sectionviewpagename[i],'section-view', sectionviewSECTIONname[i]);
            },
            onEnter: () => {
                    this.sectionClickDataLayer(sectionviewpagename[i],'section-view', sectionviewSECTIONname[i]);
            },
        });
      }
    }  
    },
  };
  </script>
  
  <style lang="scss" src="./Styles/Main.scss"></style>