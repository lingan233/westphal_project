import { writable, Writable } from "svelte/store";

export const selected_tags = writable([]);

export const remaining_tags = writable([]);

export const displaying_tags = writable([]);