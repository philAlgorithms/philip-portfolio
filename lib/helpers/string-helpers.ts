export const standardTimeLegacy = (datetime?: string): string | undefined => {
  if (datetime === undefined) return undefined;

  var date = new Date(datetime as string);
  var hours = date.getHours();
  var minutes = date.getMinutes() as number | string;
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = (minutes as number) < 10 ? '0' + minutes : minutes;
  var formattedTime = hours + ':' + minutes + ' ' + ampm;

  return formattedTime;
};

export function ltrim(string: string, character?: string): string {
  character ||= '/';
  if (string.charAt(0) == character) string = string.substring(1);

  return string;
}

export function someArrayElementStartsWith(
  string: string,
  array: Array<string>
): boolean {
  return array.some((str) => str.startsWith(string));
}

export function stringStartsWithSomeArrayElement(
  string: string,
  array: Array<string>
): boolean {
  return array.some((str) => string.startsWith(str));
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function getFileExtensionFromUrl(url: string) {
  // Extract the file name from the URL
  var fileName = url.substring(url.lastIndexOf('/') + 1);

  // Extract the file extension from the file name
  var fileExtension = fileName.split('.').pop();

  return fileExtension;
}

export function splitStringIntoThree(input: string): string[] {
  // Split the input string into words
  const words = input.split(' ');

  if (words.length >= 3) {
    // Case where input has 3 or more words
    const lastWord = words.pop()!;
    const secondLastWord = words.pop()!;
    const remainingString = words.join(' ');
    return [remainingString, secondLastWord, lastWord];
  } else if (words.length === 2) {
    // Case where input has exactly 2 words
    return ['', words[0], words[1]];
  } else if (words.length === 1) {
    // Case where input has exactly 1 word
    return ['', '', words[0]];
  } else {
    // Case where input is an empty string or only whitespace
    return ['', '', ''];
  }
}

export function formatAmount(amount: number, currency: string) {
  const locale = currency == 'NGN' ? 'en-NG' : 'en-US';
  return new Intl.NumberFormat(locale, {
    currency: currency,
    style: 'currency',
  }).format(amount);
}
export const nigerianCurrencyFormat = new Intl.NumberFormat('en-NG', {
  currency: 'NGN',
  style: 'currency',
});
