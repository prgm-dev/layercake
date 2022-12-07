/** Return `true` if the argument is neither `null` nor `undefined`. */
export function isValue<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}

/** Extracts the callable function from a type `T` */
export type Callable<T> = T extends (...args: any[]) => any
	? (...args: Parameters<T>) => ReturnType<T>
	: never;
