<template>
  <div id="app" :class="{ screentest: userAgent.screentest, isIE: isIE}">
    <section :class="{ 'main-wrapp': true}">
      <header>
        <header-top />
        <header-block :navData="navData" @scroll="scrollTo" />
      </header>
      <main>
        <router-view />
        <ISI :currentSection="navData.currentSection" />
      </main>
      <rotate-lock v-if="userAgent.orientation === 'landscape' && userAgent.device.isPhone"></rotate-lock>
      <footer>
        <brand-footer :footerData="footerData" :navData="navData" @scroll="scrollTo" />
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
import ISI from "@/Components/Blocks/ISI/ISI";
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
    ISI,
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
      },
      footerData: {
        referenceList: {
          title: 'References:',
          references: "<b class='primary'>1.</b> Taltz. Prescribing Information. Lilly USA, LLC. <b class='primary'>2.</b> Data on file. Lilly USA, LLC. DOF-IX-US-0304. <b class='primary'>3.</b> Mease PJ, van der Heijde D, Ritchlin CT, et al; on behalf of SPIRIT-P1 Study Group. Ixekizumab, an interleukin-17A specific monoclonal antibody, for the treatment of biologic-naive patients with active psoriatic arthritis: results from the 24-week randomised, double-blind, placebo-controlled and active (adalimumab)-controlled period of the phase III trial SPIRIT-P1. Ann Rheum Dis. 2017;76:79-87. <b class='primary'>4.</b> Nash P, Kirkham B, Okada M, et al; on behalf of SPIRIT-P2 Study Group. Ixekizumab for the treatment of patients with active psoriatic arthritis and an inadequate response to tumour necrosis factor inhibitors: results from the 24-week randomised, double-blind, placebo-controlled period of the SPIRIT-P2 phase III trial. Lancet. 2017;389:2317-2327. <b class='primary'>5.</b> Nash P, Kirkham B, Okada M, et al; on behalf of SPIRIT-P2 Study Group. Ixekizumab for the treatment of patients with active psoriatic arthritis and an inadequate response to tumour necrosis factor inhibitors: results from the 24-week randomised, double-blind, placebo-controlled period of the SPIRIT-P2 phase III trial. Lancet. 2017;389:2317-2327. Supplementary appendix. <b class='primary'>6.</b> Data on file. Lilly USA, LLC. DOF-IX-US-0013. <b class='primary'>7.</b> Chandran V, van de Heijde D, Fleischmann R, et al. Ixekizumab treatment of biologic-naïve patients with active psoriatic arthritis: 3-year results from a phase III clinical trial (SPIRIT-P1). Rheumatology. 2020;59:2774-2784."
        },
        footerLinks: {
          pp: {
            link: 'https://www.haymarketmediaus.com/haymarket-media-inc-privacy-policy/',
            text: 'Privacy Policy'
          },
          tc: {
            link: 'https://www.haymarketmediaus.com/haymarket-media-inc-terms-and-conditions-of-service/',
            text: 'Terms & Conditions'
          }
        },
        footerContent: {
          info1: 'Taltz® and its delivery device base are trademarks owned or licensed by Eli Lilly and Company, its subsidiaries, or affiliates. Humira® is a registered trademark of AbbVie Biotechnology Ltd.',
          info2: 'If you have a question about a Lilly product, please call <b>1-800-LillyRx (1-800-545-5979).</b>',
          info3: 'This site is intended for use by US healthcare professionals only.',
          info4: 'PP-IX-US-6924 09/2024 © Lilly USA, LLC 2024. All rights reserved. ',
          logo: require('@/Assets/Img/logos/logo-lilly-amc.svg')
        }
      },
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
    var sectionviewarray = [".hero","#ACR","#Joint", "#Access", '.references'];
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