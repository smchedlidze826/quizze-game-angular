import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decode'
})
export class DecodePipe implements PipeTransform {

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
    if (finalValue.includes("&amp;")) {
      finalValue = finalValue.replace(/&amp;/g, "&");
    }
    if (finalValue.includes("&shy;")) {
      finalValue = finalValue.replace(/&shy;/g, "-");
    }
    if (finalValue.includes("&iacute;")) {
      finalValue = finalValue.replace(/&iacute;/g, "i");
    }
    if (finalValue.includes("&uuml;")) {
      finalValue = finalValue.replace(/&uuml;/g, "u");
    }

    return finalValue;
  }

}

