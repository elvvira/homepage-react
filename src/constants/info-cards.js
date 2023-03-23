import { v4 } from 'uuid';

const cardNew = [
	{
		id: v4(),
		title: 'Hydrogen VS Electric Cars',
		text: 'Will hydrogen-fueled cars ever catch up to EVs?'
	},
	{
		id: v4(),
		title: 'The Downsides of AI Artistry',
		text: 'What are the possible adverse effects of on-demand AI image generation?'
	},
	{
		id: v4(),
		title: 'Is VC Funding Drying Up?',
		text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
	}
];

const cardFooter = [
	{
		id: v4(),
		icon: '/public/images/image-retro-pcs.jpg',
		number: '01',
		title: 'Reviving Retro PCs',
		info: 'What happens when old PCs are given modern upgrades?'
	},
	{
		id: v4(),
		icon: '/public/images/image-top-laptops.jpg',
		number: '02',
		title: 'Top 10 Laptops of 202s2',
		info: 'Our best picks for various needs and budgets.'
	},
	{
		id: v4(),
		icon: '/public/images/image-gaming-growth.jpg',
		number: '03',
		title: 'The Growth of Gaming',
		info: 'How the pandemic has sparked fresh opportunities.'
	}
];
export { cardNew, cardFooter };
