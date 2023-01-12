export function random_min_max(Min, Max) {
	return Math.floor(Math.random() * (Max - Min + 1) + Min);
}
