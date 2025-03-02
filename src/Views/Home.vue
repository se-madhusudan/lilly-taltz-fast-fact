<template src="./Home.html"></template>
<script>
import { mapState } from "vuex";
import ScrollDepthAnalytics from "@/mixins/ScrollDepthAnalytics";
import HeroSection from '@/Components/Blocks/Hero/Hero';
import ACR from '@/Components/Blocks/ACR/ACR';
import Joint from '@/Components/Blocks/Joint/Joint';
import Access from '@/Components/Blocks/Access/Access';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
export default {
  name: "HomePage",
  components: {
    HeroSection,
    ACR,
    Joint,
    Access
  },
  data() {
    return {
      hero: {
        heroData: {
          title: 'Psoriatic Arthritis Efficacy',
          des: 'An 1L-17A antagonist with rapid and sustained efficacy in the joints and <span class="text-noWrap">skin<sup>1-13</sup></span>'
        }
      },
      isActiveOverlay: false,
      deadInteractivity: true,
      currentSection: 0,
      sections: {},
      sectionScene: [],
      options: {
        container: "body",
        easing: "ease-in",
        offset: 0,
      },
      publicPath: process.env.BASE_URL,
      microbeAnimationScene_1: {},
      popupTimer: null,
      backplateTimer: null,
      resizeTimer: null,
      initTileProps: [],
      postFontSize: 1,
    };
  },

  computed: {
    ...mapState([
      "userAgent",
      "urls",
      "animationsData",
      "controllerExist",
      "mainMenu",
      "activeSection",
    ]),
    isIE() {
      return this.userAgent.browser.name === "ie";
    },
    routes() {
      return this.$router.options.routes;
    },
  },

  methods: {
  },

  mounted() { },

  mixins: [ScrollDepthAnalytics],
};
</script>

<style lang="scss" src="./Home.scss" scoped></style>