/** @type {() => void} */
let resolve = () => {};

export function hold() {
	return new Promise((fulfil) => {
		resolve = () => fulfil('shallow');
	});
}

export function release() {
	resolve();
}
