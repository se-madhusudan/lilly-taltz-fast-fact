<template>
    <section :class="{
      isi: true,
      'isi-static': static,
      'isi-hidden': hideElement,
      'isi-opened': openedIsi && !hideElement,
      'isi-opened-menu': mobileMenuState,
      'isi-fixed': fixed,
    }">
      <div class="isi-container">
        
        <div class="isi-bottom container__wrapper">
          <div class="isi-maxw-container">
            <div class="isi__content--wrap">
              <div class="btnViewText">
                <button class="isi__expand-button" @click="toggleISI()" v-if="!static">
                  <div class="sr-only">{{ buttonText }}</div>
                </button>
              </div>
              <div class="isi__content isi-text-container isi__content--left">
                <div class="isi__content--head">
                  <h1>IMPORTANT SAFETY INFORMATION</h1>
                </div>
                <div class="isi__content--body">
                  <h3 class="mb-10">CONTRAINDICATIONS</h3>
  
                  <p class="mb-15">Taltz is contraindicated in patients with a previous serious hypersensitivity reaction, such as anaphylaxis, to ixekizumab or to any of the excipients.</p>
                  <h3 class="mb-15">WARNINGS AND PRECAUTIONS</h3>
  
                  <h4 class="mb-10">Infections</h4>
                  <p class="mb-15">Taltz may increase the risk of infection. Serious infections have occurred. In clinical trials of adult patients with plaque psoriasis, the Taltz group had a higher rate of infections than the placebo group (27% vs 23%). A similar increase in risk of infection was seen in placebo-controlled trials of adult patients with psoriatic arthritis, ankylosing spondylitis, non-radiographic axial spondyloarthritis, and pediatric patients with plaque psoriasis. In the post-marketing setting, serious bacterial, viral, and fungal opportunistic infections have been reported in patients receiving IL-17 inhibitors, including Taltz. Instruct patients to seek medical advice if signs or symptoms of clinically important chronic or acute infection occur. If a patient develops a serious infection or is not responding to standard therapy, monitor the patient closely and discontinue Taltz until the infection resolves.</p>
  
                  <h4 class="mb-10">Pre-Treatment Evaluation for Tuberculosis</h4>
                  <p class="mb-15">Evaluate patients for tuberculosis (TB) infection prior to initiating treatment with Taltz. Do not administer to patients with active TB infection. Initiate treatment of latent TB prior to administering Taltz. Consider anti-TB therapy prior to initiating Taltz in patients with a past history of latent or active TB in whom an adequate course of treatment cannot be confirmed. Patients receiving Taltz should be monitored closely for signs and symptoms of active TB during and after treatment.</p>
  
                  <h4 class="mb-10">Hypersensitivity</h4>
                  <p class="mb-15">Serious hypersensitivity reactions, including angioedema and urticaria (each ≤0.1%), occurred in the Taltz group in clinical trials. Anaphylaxis, including cases leading to hospitalization, has been reported in postmarketing use with Taltz. If a serious hypersensitivity reaction occurs, discontinue Taltz immediately and initiate appropriate therapy.</p>
  
                  <h4 class="mb-10">Eczematous Eruptions</h4>
                  <p class="mb-15">In the postmarketing setting, cases of severe eczematous eruptions, including atopic dermatitis-like eruptions, dyshidrotic eczema, and erythroderma were reported in patients receiving Taltz; some cases resulted in hospitalization. The onset of eczematous eruptions was variable, ranging from days to months after the first dose of Taltz. Treatment may need to be discontinued to resolve the eczematous eruption. Some patients with limited psoriasis treatment options were successfully treated for eczema while continuing Taltz.</p>
  
                  <h4 class="mb-10">Inflammatory Bowel Disease</h4>
                  <p class="mb-15">Patients treated with Taltz may be at an increased risk of inflammatory bowel disease. In clinical trials, Crohn's disease and ulcerative colitis, including exacerbations, occurred at a greater frequency in the Taltz group than the placebo group. During Taltz treatment, monitor patients for onset or exacerbations of inflammatory bowel disease and if IBD occurs, discontinue Taltz and initiate appropriate medical management.</p>
  
                  <h4 class="mb-10">Immunizations</h4>
                  <p class="mb-20">Prior to initiating therapy with Taltz, consider completion of all age-appropriate immunizations according to current immunization guidelines. Avoid use of live vaccines in patients treated with Taltz.</p>
  
                  <h3 class="mb-10">ADVERSE REACTIONS</h3>
                  <p class="mb-10">Most common adverse reactions (≥1%) associated with Taltz treatment are injection site reactions, upper respiratory tract infections, nausea, and tinea infections. Overall, the safety profiles observed in adult patients with psoriatic arthritis, ankylosing spondylitis, non-radiographic axial spondyloarthritis, and pediatric patients with plaque psoriasis were consistent with the safety profile in adult patients with plaque psoriasis, with the exception of influenza and conjunctivitis in psoriatic arthritis and conjunctivitis, influenza, and urticaria in pediatric psoriasis.</p>
                  <p class="isi__content--boldText mb-10">Please see <a :href="urls.PI.link" target="_blank">{{ urls.PI.text }}</a> and <a :href="urls.MG.link" target="_blank">{{ urls.MG.text }}</a>. See <a href="https://uspl.lilly.com/taltz/taltz.html?s=ug0" target="_blank">Instructions for Use</a> included with the device.</p>
                  <p class="isi__content--boldText mb-10">Taltz is available as an 80 mg/mL, 40 mg/0.5mL, 20 mg/0.25mL injection.</p>
                  <p class="isi__content--boldText">IX HCP ISI 20AUG2024</p>
                </div>
              </div>
              <div class="isi__content--center"></div>
              <div class="isi__content isi-text-container isi__content--right">
                <div class="isi__content--head">
                  <h1>INDICATIONS</h1>
                </div>
                <div class="isi__content--body">
                  <p>Taltz is indicated for adults with active psoriatic arthritis (PsA), for adults with active ankylosing spondylitis (AS), and for adults with active non-radiographic axial spondyloarthritis (nr-axSpA) with objective signs of inflammation. Taltz is also indicated for patients aged 6 years or older with moderate-to-severe plaque psoriasis (PsO) who are candidates for systemic therapy or phototherapy.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bottomscrollbar"></div>
          <div class="topscrollbar"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapState } from "vuex";
  import ClickAnalytics from "@/mixins/ClickAnalytics"; 
  
  export default {
    name: "Isi",
    components: {},
    props: {
      static: {
        type: Boolean,
        default: false,
      },
      hideElement: {
        type: Boolean,
        default: false,
      },
      fixed: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        openedIsi: false,
        buttonText: 'expand'
      };
    },
    computed: {
      ...mapState([
        "userAgent",
        "urls",
        "mobileMenuState",
        "activeSection",
        "mainMenu",
      ]),
    },
    mixins: [ClickAnalytics],
    methods: {
      toggleISI() {
        this.openedIsi = !this.openedIsi;
        document.querySelector("html").style.overflow = this.openedIsi
          ? "hidden"
          : "visible";
          this.buttonText = this.buttonText === 'expand' ? 'collapse' : 'expand';        
      },
      scrollFunction(){
        if (window.scrollY > 20){
          document.querySelector(".isi").classList.remove("isi-collapse");
        } else {
          document.querySelector(".isi").classList.add("isi-collapse");
        }
      }
    },
    mounted(){
      window.addEventListener("scroll", this.scrollFunction);
      if(window.scrollY === 0){
        document.querySelector(".isi").classList.add("isi-collapse");
      }
    }
  };
  </script>
  
  <style lang="scss" src="./Isi.scss" />
  