export default function bs_list(haystack: number[], needle: number): boolean {
  let lowPoint = 0;
  let highPoint = haystack.length;

  do {
    let middlePoint = Math.floor((lowPoint + highPoint) / 2);
    let value = haystack[middlePoint];

    if (value === needle) {
      return true
    } else if (value > needle) {
      highPoint = middlePoint - 1
    } else {
      lowPoint = middlePoint + 1
    }

  } while (lowPoint < highPoint)

  return false
}
