import { writable } from "svelte/store";

export const paymentPlan = writable( 'monthly' );
export const sample = writable( 'home' );
export const totalAmount = writable( 12500 );