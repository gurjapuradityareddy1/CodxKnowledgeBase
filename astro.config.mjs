// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Codx',

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/gurjapuradityareddy1/curved-conjunction',
				},
			],

			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{
							autogenerate: {
								directory: 'getting-started',
							},
						},
					],
				},

				{
					label: 'Core Concepts',
					items: [
						{
							autogenerate: {
								directory: 'core-concepts',
							},
						},
					],
				},

				{
					label: 'Guides',
					items: [
						{
							autogenerate: {
								directory: 'guides',
							},
						},
					],
				},

				{
					label: 'Integrations',
					items: [
						{
							autogenerate: {
								directory: 'integrations',
							},
						},
					],
				},

				{
					label: 'Workflows',
					items: [
						{
							autogenerate: {
								directory: 'workflows',
							},
						},
					],
				},

				{
					label: 'Administration',
					items: [
						{
							autogenerate: {
								directory: 'administration',
							},
						},
					],
				},

				{
					label: 'Developer Documentation',
					items: [
						{
							autogenerate: {
								directory: 'developer-docs',
							},
						},
					],
				},

				{
					label: 'API Reference',
					items: [
						{
							autogenerate: {
								directory: 'api-reference',
							},
						},
					],
				},

				{
					label: 'Troubleshooting',
					items: [
						{
							autogenerate: {
								directory: 'troubleshooting',
							},
						},
					],
				},

				{
					label: 'Learn',
					items: [
						{
							autogenerate: {
								directory: 'learn',
							},
						},
					],
				},
			],
		}),
	],
});