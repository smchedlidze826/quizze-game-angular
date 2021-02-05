import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeCharacters'
})
export class DecodeCharactersPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    let f: string
    let c: string
    if (value.indexOf('&quot;') > -1 || value.indexOf('&#039;') > -1) {
      for (let i = 0; i < value.length; i++) {
        f = value.replace('&quot;', '')
        c = f.replace('&#039;', "'")
        value = c
      }
      return c
    } else {
      return value
    }
  }
}
