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
      acr: {
        acrData: {
          title: 'ACR Results',
          des: 'Rapid ACR20 response seen as early as Week 2 in some patients with active psoriatic arthritis, regardless of TNFi experience<sup>1-5</sup>',
          graphData: [
            {
              title: 'SPIRIT-P1 (BIOLOGIC-NAIVE) ACR20 response rates through week 24, NRI',
              footnote: '*<i>P</i>≤.001 vs placebo at weeks 12 and 24',
              desktop: require('@/Assets/Img/charts/spirit-1-lg.png'),
              mobile: require('@/Assets/Img/charts/spirit-1-sm.png')
            },
            {
              title: 'SPIRIT-P2 (TNFi-EXPERIENCED) ACR20 response rates through week 24, NRI',
              footnote: '†<i>P</i><.0001 vs placebo at weeks 12 and 24',
              desktop: require('@/Assets/Img/charts/spirit-2-lg.png'),
              mobile: require('@/Assets/Img/charts/spirit-2-sm.png'),
            },
          ],
          listHeading: [
            'ACR20 at week 2 was not controlled for type 1 error; therefore, statistical conclusions cannot be made.',
            'Additional Week 24 Data, NRI:'
          ],
          listItem: [
            'In SPIRIT-P1 and SPIRIT-P2, 40% and 35% of patients receiving Taltz achieved ACR50 vs 15% and 5% for placebo, and 23% and 22% of Taltz patients achieved ACR70 vs 6% and 0% for placebo (P<.001 vs placebo).',
            'NRI of intent-to-treat population through week 24.',
            'Inadequate responders (<20% improvement in tender and in swollen joint counts) at week 16 were analyzed as nonresponders after week 16 until the primary endpoint.',
            'Primary endpoint=ACR20 response at week 24.'
          ],
          scrollDownText: 'Scroll down for SPIRIT-P1 and -P2 trial designs.',
          selectText: 'SELECT IMPORTANT SAFETY INFORMATION: ',
          contraText: 'CONTRAINDICATIONS:',
          taltzText: 'Taltz is contraindicated in patients with a previous serious hypersensitivity reaction, such as anaphylaxis, to ixekizumab or to any of the excipients.'
        
        }
      },
      joint: {
        jointData: {
          title: 'Joint Symptom Results',
          subTitle: 'Consistent joint symptom results sustained through year 3<sup>6-7</sup>',
          graphData: {
            title: 'For biologic-native patients with active psoriatic arthritis',
            footnote: '',
            desktop: require('@/Assets/Img/charts/arthritis-lg.png'),
            mobile: require('@/Assets/Img/charts/arthritis-sm.png')
          },
          des1: [
            'Nx=observed population at week 156.',
            '<b class="primary">In an mNRI analysis of patients receiving Taltz:</b> at week 52, 76% achieved ACR20, 60% achieved ACR50, and 40% achieved ACR70; at week 108, 71% achieved ACR20, 52% achieved ACR50, and 30% achieved ACR70; at week 156, 70% achieved ACR20, 52% achieved ACR50, and 33% achieved ACR70.',
            'mNRI of intent-to-treat population through week 156.',
            'mNRI, a preferred method for analyzing long term efficacy, imputes missing data due to study drug (eg, inadequate response, adverse event, or lack of efficacy) as nonresponse; whereas missing data due to other reasons (eg, missed visits. lost to follow-up) is included as a predicted value based on statistical modeling of observed data.',
            'Inadequate responders (<20% improvement in tender and in swollen joint counts) at week 16 were analyzed as nonresponders after week 16 until the primary endpoint.',
            'After week 24, patients knew they were taking active treatment but remained blind to the dose until the last patient completed week 24. The uncontrolled extension period of the study has limitations (eg, no placebo comparisons. patients remaining in the study may be those with better results).',
            'Primary endpoint=ACR20 response at week 24. Scroll down for SPIRIT-Pl and -P2 Trial Design.',
          ],
          footnote1: 'ACR20/50/70=American College of Rheumatology 20%/50%/70% response rate; mNRl=modified nonresponder imputation; TNFi=tumor necrosis factor inhibitor.',
          des2: [
            '<b class="primary">SPIRIT -P1 and -P2: ACR Response Rates at Week 24, NRI<sup>1,3-4</sup></b>',
            'In SPIRIT-Pl (biologic-naive) (Taltz 80 mg every 4 weeks n=107; placebo n=106) and SPIRIT-P2 (TNFi-experienced) (Taltz 80 mg every 4 weeks n=122; placebo n=118), in patients with active psoriatic arthritis, 58% and 53% of Taltz patients, respectively, achieved ACR20 vs 30% and 20% for placebo. Additionally, 40% and 35% of patients receiving Taltz achieved ACR50 vs 15% and 5% for placebo, and 23% and 22% of Taltz patients achieved ACR70 vs 6% and 0% for placebo. (P<.001 vs placebo for ACR20/50/70).',
            'Primary endpoint=ACR20 response at week 24',
            'Inadequate responders (<20% improvement in tender and in swollen joint counts) at week 16 were analyzed as nonresponders after week 16 until the primary endpoint.',
            'NRI of intent-to-treat population through week 24.'
          ],
          footnote2: 'ACR20/50/70=American College of Rheumatology 20%/50%/70% response rate; NRl=nonresponder imputation; TNFi=tumor necrosis factor inhibitor.'
        }
      },
      access: {
        accessData: {
          title: 'Access & Support',
          subTitle: 'Getting Patients Started & Resources'
        
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