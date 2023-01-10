import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = () => {
	if (params.slug === 'UXID') {
		return {
			title: 'User Experience and Interaction Design',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	throw error(404, 'Not found');
};
