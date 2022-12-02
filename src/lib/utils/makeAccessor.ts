import canBeZero from './canBeZero.js';

/**
	Make an accessor from a string, number, function or an array of the combination of any.

	@param acc The accessor function, key or list of them.
	@returns An accessor function.
*/
export default function makeAccessor<Datum, Acc extends Accessor<Datum> = Accessor<Datum>>(acc: Acc): Acc extends readonly any[] ? AccessorFunction<Datum, number[]> : AccessorFunction<Datum, number>;
export default function makeAccessor<Datum, Acc extends Accessor<Datum> = Accessor<Datum>>(acc: Acc): (AccessorFunction<Datum, number> | AccessorFunction<Datum, number[]>) {
	if (!canBeZero(acc)) return null;
	if (Array.isArray(acc)) {
		return d => acc.map((k) => {
			return typeof k === 'function' ? k(d) : (d[k]);
		});
	} else if (typeof acc !== 'function') {
		// @ts-expect-error: TypeScript cannot infer that `acc` can index `d` here.
		return d => d[acc];
	}
	return acc;
}

export type AccessorFunction<Datum, Out = number> = ((d: Datum) => Out)

/** A key, an index, or a function that yields a number. */
export type SimpleAccessor<Datum> = (KeysWithValueMatchingType<Datum, number> | AccessorFunction<Datum>)
/** An array of `SimpleAccessors` */
export type StackedAccessor<SubDatum> =
	| (KeysWithValueMatchingType<SubDatum, number>
		| AccessorFunction<SubDatum>)[]

/** A string, an accessor function, or a number to access `Datum`. */
export type Accessor<Datum> = SimpleAccessor<Datum> | (
	Datum extends readonly (infer SubDatum)[]
	? StackedAccessor<SubDatum>
	: never)

/**
 * An {@linkcode Accessor} or an array of
 * any combination of {@linkcode Accessor | Accessors}.
 */
// export type AccessorArray<Datum, Out extends number[] | number> =

/** Select all keys/indices in `T` that map to a value of type `Match` */
export type KeysWithValueMatchingType<T, Match> = keyof T & (T extends Match[]
	? number
	: T extends readonly Match[]
	? Exclude<Partial<T>["length"], T["length"]>
	: T extends Record<any, unknown>
	? { [K in keyof T]: T[K] extends Match ? K : never }[keyof T]
	: never);

const data = [[0, 3840], [0, 1600], [0, 640], [0, 320]]
const dataBis = [{ x: 0, y: 3840 }, { x: 0, y: 1600 }, { x: 0, y: 640 }, { x: 0, y: 320 }]
const data2 = [0, 3840]
const data2bis = [{ a: 0 }, { b: 3840 }]
const data2tres = [{ a: 0 }, { b: 3840 }]
const data3 = { x: 0, y: 3840 }

type A = Accessor<typeof data>
type Abis = Accessor<typeof dataBis>
type B = Accessor<typeof data2>
type C = Accessor<typeof data3>

const a1: A = [0, 1]
const a2: A = [(d) => d[1], (d) => d[0]]
const a3: A = [0, (d) => d[0]]
const aBis1: Abis = ["x", "y"]
const aBis2: Abis = [(d) => d.x, (d) => d.y]

const b1: B = 0;
const b2: B = (d) => d[1];

const c1: C = 'x';
const c2: C = (d) => d.x;

let val: number

val = data2[b1]
val = b2(data2)

val = data3[c1]
val = c2(data3)
