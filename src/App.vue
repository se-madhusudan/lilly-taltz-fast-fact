<template>
  <div id="app" :class="{ screentest: userAgent.screentest, isIE: isIE}">
    <section :class="{ 'main-wrapp': true}">
      <header>
        <header-top />
        <header-block :navData="navData" @scroll="scrollTo" />
      </header>
      <main>
        <router-view />
        <ISI :isiData="isiData" :footerData="footerData" :currentSection="navData.currentSection" />
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
      isiData: {
        indicationData: {
          title: 'INDICATIONS',
          des: 'Taltz is indicated for adults with active psoriatic arthritis (PsA), for adults with active ankylosing spondylitis (AS), and for adults with active non-radiographic axial spondyloarthritis (nr-axSpA) with objective signs of inflammation. Taltz is also indicated for patients aged 6 years or older with moderate-to-severe plaque psoriasis (PsO) who are candidates for systemic therapy or phototherapy.'
        },
        safetyData: {
          title: 'IMPORTANT SAFETY INFORMATION',
          contraindication: {
            title: 'CONTRAINDICATIONS',
            des: 'Taltz is contraindicated in patients with a previous serious hypersensitivity reaction, such as anaphylaxis, to ixekizumab or to any of the excipients.',
          },
          warnings: {
            title: 'WARNINGS AND PRECAUTIONS',
            infection: {
              subtitle: 'Infections',
              des: 'Taltz may increase the risk of infection. Serious infections have occurred. In clinical trials of adult patients with plaque psoriasis, the Taltz group had a higher rate of infections than the placebo group (27% vs 23%). A similar increase in risk of infection was seen in placebo-controlled trials of adult patients with psoriatic arthritis, ankylosing spondylitis, non-radiographic axial spondyloarthritis, and pediatric patients with plaque psoriasis. In the post-marketing setting, serious bacterial, viral, and fungal opportunistic infections have been reported in patients receiving IL-17 inhibitors, including Taltz. Instruct patients to seek medical advice if signs or symptoms of clinically important chronic or acute infection occur. If a patient develops a serious infection or is not responding to standard therapy, monitor the patient closely and discontinue Taltz until the infection resolves.'
            },
            evaluation: {
              subtitle: 'Pre-Treatment Evaluation for Tuberculosis',
              des: 'Evaluate patients for tuberculosis (TB) infection prior to initiating treatment with Taltz. Do not administer to patients with active TB infection. Initiate treatment of latent TB prior to administering Taltz. Consider anti-TB therapy prior to initiating Taltz in patients with a past history of latent or active TB in whom an adequate course of treatment cannot be confirmed. Patients receiving Taltz should be monitored closely for signs and symptoms of active TB during and after treatment.'
            },
            hypersentivity: {
              subtitle: 'Hypersensitivity',
              des: 'Serious hypersensitivity reactions, including angioedema and urticaria (each ≤0.1%), occurred in the Taltz group in clinical trials. Anaphylaxis, including cases leading to hospitalization, has been reported in post-marketing use with Taltz. If a serious hypersensitivity reaction occurs, discontinue Taltz immediately and initiate appropriate therapy.'
            },
            eczematous: {
              subtitle: 'Eczematous Eruptions',
              des: 'In the postmarketing setting, cases of severe eczematous eruptions, including atopic dermatitis-like eruptions, dyshidrotic eczema, and erythroderma were reported in patients receiving Taltz; some cases resulted in hospitalization. The onset of eczematous eruptions was variable, ranging from days to months after the first dose of Taltz. Treatment may need to be discontinued to resolve the eczematous eruption. Some patients with limited psoriasis treatment options were successfully treated for eczema while continuing Taltz.'
            },
            inflammatory: {
              subtitle: 'Inflammatory Bowel Disease',
              des: "Patients treated with Taltz may be at an increased risk of inflammatory bowel disease. In clinical trials, Crohn's disease and ulcerative colitis, including exacerbations, occurred at a greater frequency in the Taltz group than the placebo group. During Taltz treatment, monitor patients for onset or exacerbations of inflammatory bowel disease and if IBD occurs, discontinue Taltz and initiate appropriate medical management."
            },
            immunizations: {
              subtitle: 'Immunizations',
              des: 'Prior to initiating therapy with Taltz, consider completion of all age-appropriate immunizations according to current immunization guidelines. Avoid use of live vaccines in patients treated with Taltz.'
            },
            adverse: {
              subtitle: 'ADVERSE REACTIONS',
              des: 'Most common adverse reactions (≥1%) associated with Taltz treatment are injection site reactions, upper respiratory tract infections, nausea, and tinea infections. Overall, the safety profiles observed in adult patients with psoriatic arthritis, ankylosing spondylitis, non-radiographic axial spondyloarthritis, and pediatric patients with plaque psoriasis were consistent with the safety profile in adult patients with plaque psoriasis, with the exception of influenza and conjunctivitis in psoriatic arthritis and conjunctivitis, influenza, and urticaria in pediatric psoriasis.',
              links: {
                text: '<b>Please see <a class="primary" href="https://cancertherapy.com/prescribing-information" target="_blank">Prescribing Information</a> and <a class="primary" href="https://cancertherapy.com/medication-guide" target="_blank">Medication Guide</a>. See <a class="primary" href="https:cancertherapy.com/instruction-use" target="_blank">Instructions for Use</a> included with the device.</b>',
              },
              taltz: '<b>[Taltz is available as an 80 mg/mL, 40 mg/0.5mL, 20 mg/0.25mL injection.]</b>',
              ix: '<b>IX HCP ISI 20AUG2024</b>'
            },
          },
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