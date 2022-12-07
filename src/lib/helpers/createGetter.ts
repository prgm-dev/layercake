import type { AccessorFunction } from '$lib/utils/makeAccessor';
import type { Callable } from '$lib/utils/type-helpers';
import type { GenericScalingFunction } from './createScale';

export default function createGetter<
	Datum,
	Acc extends AccessorFunction<Datum, number> | AccessorFunction<Datum, number[]>
>($acc: Acc, $scale: Callable<GenericScalingFunction>): Acc;
export default function createGetter<
	Datum,
	Acc extends AccessorFunction<Datum, number> | AccessorFunction<Datum, number[]>
>($acc: Acc, $scale: Callable<GenericScalingFunction>): AccessorFunction<Datum, number | number[]> {
	return (d: Datum) => {
		const val = $acc(d);
		if (Array.isArray(val)) {
			return val.map((v) => $scale(v)) as number[] | number;
		}
		return $scale(val);
	};
}
