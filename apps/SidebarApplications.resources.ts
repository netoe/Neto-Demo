//

const newApp = (icon: string, en: string, zh: string) => ({icon, en, zh});

export const R = {
	milestones: newApp(
		'milestones.png',
		'Milestones',
		'里程碑',
	),
	muilib: newApp(
		'satelite.png',
		'MuiLib',
		'组件库',
	),
	noting: newApp(
		'noting.png',
		'Notes',
		'笔记',
	),
};
