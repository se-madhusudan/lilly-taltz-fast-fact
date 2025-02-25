<template src="./Home.html"></template>
<script>
import { mapState } from "vuex";
import ScrollDepthAnalytics from "@/mixins/ScrollDepthAnalytics";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
export default {
  name: "HomePage",
  components: {

  },
  data() {
    return {
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