import { random_min_max } from './RandomMinMax';
import { get_all_tags } from './GetAllTags';

export function generate_random_tags(Tags: [], TagAmount: number) {
	let selected: string[] = [];
	let remaining: string[] = get_all_tags();

	for (let i = 0; i < TagAmount; i++) {
		let r = Number(random_min_max(0, remaining.length - 1));
		let i = remaining.at(r);
		selected.push(String(remaining.at(r)));
		remaining.splice(r, 1);
	}
	return selected;
}
