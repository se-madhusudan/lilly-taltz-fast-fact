<template>
    <section class="brandFooter" id="brandFooter">
      <div class="contentWrap">
        <ReferenceSection :referenceList="footerData.referenceList" />
      </div>
      <div class="brandFooter__upper">
        <div class="contentWrap">
          <div class="brandFooter__upperContent">
            <p v-html="footerData.footerContent.info1"></p>
            <p v-html="footerData.footerContent.info2"></p>
            <p v-html="footerData.footerContent.info3"></p>
            <p v-html="footerData.footerContent.info4"></p>
            <div class="logo">
              <img :src="footerData.footerContent.logo" alt="Lilly A Medical Company logo">
            </div>
          </div>
        </div>
        <div class="brandFooter__disclaimer">
          <p>This <i>Rheumatology Advisor Fast Facts</i> is produced as a basic reminder of important information for healthcare professionals. Readers are advised to consult manufacturers and specialists if questions arise about specific products, treatments, or diseases. The publisher and editors do not assume liability for any errors or omissions. <i>Rheumatollogy Advisor</i> and <i>Fast Facts</i> are registered trademarks of Haymarket Media, Inc.</p>
        </div>
      </div>
      <div class="brandFooter__lower">
        <div class="brandFooter__lowerContent">
          <p>&copy; 2024 Haymarket Media, Inc. <span class="text-noWrap">All rights reserved.</span></p>
          <p class="bottomLinks">
            <a :href="footerData.footerLinks.pp.link" target="_blank">{{ footerData.footerLinks.pp.text }}</a> 
            <a :href="footerData.footerLinks.tc.link" target="_blank">{{ footerData.footerLinks.tc.text }}</a>
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import ReferenceSection from "@/Components/Blocks/References/References";
  import { mapState } from "vuex";
  export default {
    name: "BrandFooter",
    components: {
      ReferenceSection,
    },
    props: {
      navData: Object,
      footerData: Object
    },
    data() {
      return {
         
      }
    },
    computed: {
      ...mapState(["urls"]),
    },
    methods: {
      emitScroll(anchor, anchorText) {
      this.$emit('scroll', anchor, anchorText);
    }
    }
  };
  </script>
  
  <style lang="scss" src="./BrandFooter.scss" />
  