// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	modules: ["@nuxt/ui", "@nuxtjs/sanity"],
	sanity: {
		projectId: process.env.SANITY_STUDIO_PROJECTID,
		dataset: process.env.SANITY_STUDIO_DATASET || "production",
	},
	css: ["~/assets/css/main.css"],
	ui: {
		colorMode: false,
	},
});
