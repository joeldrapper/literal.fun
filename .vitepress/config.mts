import { defineConfig } from "vitepress";

export default defineConfig({
	title: "Literal",
	description: "A literal Ruby gem.",
	themeConfig: {
		search: {
			provider: "local",
		},

		editLink: {
			pattern: "https://github.com/joeldrapper/literal.fun/edit/main/:path",
		},

		nav: [
			{ text: "Home", link: "/" },
			{ text: "Docs", link: "/docs/" },
		],

		sidebar: [
			{ text: "Getting started", link: "/docs/" },
			{ text: "Types", link: "/docs/types" },
			{ text: "Built in types", link: "/docs/built-in-types" },
			{ text: "Properties", link: "/docs/properties" },
			{ text: "Objects", link: "/docs/objects" },
			{ text: "Structured objects", link: "/docs/structured-objects" },
			{ text: "Enums", link: "/docs/enums" },
			{ text: "Flags", link: "/docs/flags" },
			{ text: "Arrays", link: "/docs/array" },
			{ text: "Rails integration", link: "/docs/rails" },
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/joeldrapper/literal" },
			{ icon: "discord", link: "https://discord.gg/vxCFEcd2vn" },
		],

		footer: {
			message: "Released under the MIT License.",
			copyright:
				'Made by <a href="https://github.com/joeldrapper">Joel Drapper</a>, <a href="https://github.com/stevegeek">Stephen Ierodiaconou</a> and dozens of other <a href="https://github.com/joeldrapper/literal/graphs/contributors">contributors</a>.',
		},
	},
});
