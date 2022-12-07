import { scaleIdentity, type ScaleContinuousNumeric } from 'd3-scale';
import getDefaultRange from '../settings/getDefaultRange.js';
import padScale from '../utils/padScale.js';
import type { Axis } from './axes.js';

export default function createScale(s: Axis) {
	return function scaleCreator([
		$scale,
		$extents,
		$domain,
		$padding,
		$nice,
		$reverse,
		$width,
		$height,
		$range,
		$percentScale,
	]: [GenericScalingFunction, ...any]) {
		if ($extents === null) {
			return scaleIdentity();
		}

		const defaultRange = getDefaultRange(s, $width, $height, $reverse, $range, $percentScale);

		const scale = $scale.copy();

		/* --------------------------------------------
		 * Set the domain
		 */
		scale.domain($domain);

		/* --------------------------------------------
		 * Set the range of the scale to our default if
		 * the scale doesn't have an interpolator function
		 * or if it does, still set the range if that function
		 * is the default identity function
		 */
		if (
			!scale.interpolator ||
			(typeof scale.interpolator === 'function' && scale.interpolator().name.startsWith('identity'))
		) {
			scale.range(defaultRange);
		}

		if ($padding) {
			scale.domain(padScale(scale, $padding));
		}

		if ($nice === true || typeof $nice === 'number') {
			if (typeof scale.nice === 'function') {
				scale.nice(typeof $nice === 'number' ? $nice : undefined);
			} else {
				console.error(
					`[Layer Cake] You set \`${s}Nice: true\` but the ${s}Scale does not have a \`.nice\` method. Ignoring...`
				);
			}
		}

		return scale;
	};
}

/** Describes a scaling function that returns an object of the same shape as its input. */
export type GenericScalingFunction<V extends number | number[] = number | number[]> =
	ScaleContinuousNumeric<V, V>;
