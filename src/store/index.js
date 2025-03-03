import Vue from "vue";
import Vuex from "vuex";
import userAgent from "./modules/userAgent";
import animationsData from "./animationsData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isScrollLock: false,
    mobileMenuState: false,
    activeSection: 0,
    urls: {
      PP: {
        link: "https://www.haymarketmediaus.com/haymarket-media-inc-privacy-policy/",
        text: "Privacy Policy",
      },
      TC: {
        link: "https://www.haymarketmediaus.com/haymarket-media-inc-terms-and-conditions-of-service/",
        text: "Terms & Conditions",
      }
    },
    animationsData,
    controllerExist: false,

    el: '#nav',
    mainMenu: [
      {
        id: 1,
        title: "ACR Results",
        anchorRef: "#ACR",
        sectionName: "ACR Results",
        Subsection: "-",
        dataLayerSectionName: "-",
        icon: '',
        color: ''
      },
      {
        id: 2,
        title: "Joint Symptom Results",
        anchorRef: "#Joint",
        sectionName: "Joint Symptom Results",
        Subsection: "-",
        dataLayerSectionName: "-",
        icon: '',
        color: ''
      },
      {
        id: 3,
        title: "Access & Support",
        anchorRef: "#Access",
        sectionName: "Access & Support",
        Subsection: "-",
        dataLayerSectionName: "-",
        icon: '',
        color: ''
      },

    ],
    piData: {
      title: "Prescribing Information",
      sectionName: "Prescribing Information",
      Subsection: "-",
      dataLayerSectionName: "-",
      icon: 'pdfIcon',
    }
  },

  modules: {
    userAgent,
  },
  mutations: {
    SET_SCROLL_CONTROLLER_STATE(state, value) {
      state.controllerExist = value;
    },
    TOGGLE_MOBILE_MENU(state, value) {
      state.mobileMenuState = value;
    },
    SET_ACTIVE_SECTION(state, value) {
      state.activeSection = value;
    },
  },
});
