import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeCharacters'
})
export class DecodeCharactersPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]) {
    let finalValue = value;
    if (finalValue.includes("&quot;")) {
      finalValue = finalValue.replace(/&quot;/g, "");
    }
    if (finalValue.includes("&#039;")) {
      finalValue = finalValue.replace(/&#039;/g, "'");
    }
    if (finalValue.includes('&rsquo;')) {
      finalValue = finalValue.replace(/&rsquo;/g, "")
    }
    if (finalValue.includes('&ldquo;')) {
      finalValue = finalValue.replace(/&ldquo;/g, "")

    }

    return finalValue;
  }

}
