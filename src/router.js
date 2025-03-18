import Vue from 'vue';
import Router from 'vue-router';
import Home from './Views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				id: 0,
				navData: {
					showDropdown: false,
					currentSection: 0,
					menuItem: [
						{ id: 1, anchorText: "ACR Results", anchor: "ACR" },
						{ id: 2, anchorText: "Joint Symptom Results", anchor: "Joint" },
						{ id: 3, anchorText: "Access & Support", anchor: "Access" }
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
	],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	  },
});

