import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeCharacters'
})
export class DecodeCharactersPipe implements PipeTransform {
  transform(value: string) {
    let finalValue = value;
    if (finalValue.includes("&quot;") || finalValue.includes('&ldquo;')) {
      finalValue = finalValue.replace(/&quot;/g, '"');
      finalValue = finalValue.replace(/&ldquo;/g, '"');
    }
    if (finalValue.includes("&#039;") || finalValue.includes('&rsquo;')) {
      finalValue = finalValue.replace(/&#039;/g, "'");
      finalValue = finalValue.replace(/&rsquo;/g, "'");
    }

    return finalValue;
  }
}
