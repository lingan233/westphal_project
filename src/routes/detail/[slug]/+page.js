import { error } from '@sveltejs/kit';
import data from '../../../lib/data/data.json';

export const load = ({ params }) => {
	try {
		return data.majors.find((major) => major.id.toLowerCase() === params.slug.toLowerCase());
	} catch {
		return error(404, 'Not found');
	}
};
