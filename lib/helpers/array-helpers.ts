export function flattenArrayofArrays<T = any>(array: Array<Array<T>>) {
  return array.reduce((accumulator, value) => accumulator.concat(value), []);
}

export function getNextArrayValue<T = any>(array: Array<T>, value: T) {
  const index = array.indexOf(value);
  const nextItem =
    index >= 0 && index < array.length - 1 ? array[index + 1] : undefined;

  return nextItem;
}

export function chunkArray<T = any>(arr: Array<T>, n: number) {
  var chunkLength = Math.max(arr.length / n, 1);
  var chunks = [];
  for (var i = 0; i < n; i++) {
    if (chunkLength * (i + 1) <= arr.length)
      chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
  }
  return chunks;
}

export function removeStringFromArray(str: string, array: Array<string>) {
  return array.filter((el) => el !== str);
}

// 'strict' makes sure asimilar element is not pushed to the array
export function addStringToArray(
  str: string,
  array: Array<string>,
  strict?: boolean
) {
  strict = strict ?? false;
  const similar = array.find((el) => el === str);
  if ((strict && similar !== undefined) || str.length < 1) {
    return array;
  }
  return [...array, str];
}
