import type { ScaleContinuousNumeric } from 'd3-scale';

/** Extract the range from a scale. */
export default function getRange<Range>($scale: ScaleContinuousNumeric<Range, any, any>): Range[];
export default function getRange<Range>($scale: null | undefined): null;
export default function getRange<Range>(
	$scale: Partial<ScaleContinuousNumeric<Range, any, any>> | null | undefined
): Range[] | null;
// Implementation:
export default function getRange<Range>(
	$scale: Partial<ScaleContinuousNumeric<Range, any, any>> | undefined | null
): Range[] | null {
	if (hasRange($scale)) {
		const range = $scale.range();
		if (range) {
			return range;
		}
		console.error("[LayerCake] Your scale doesn't have a `.range` method?");
	}
	return null;
}

export function hasRange<Range>(
	$scale: Partial<ScaleContinuousNumeric<Range, any, any>> | null | undefined
): $scale is ScaleContinuousNumeric<Range, any, any> {
	return !!$scale?.range && typeof $scale.range === 'function';
}
