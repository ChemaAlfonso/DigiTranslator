import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traductor'
})
export class TraductorPipe implements PipeTransform {

  abecedario = [
    {
      original: 'a',
      numeric: '4'
    },
    {
      original: 'b',
      numeric: '8'
    },
    {
      original: 'c',
      numeric: 'C'
    },
    {
      original: 'd',
      numeric: 'D'
    },
    {
      original: 'e',
      numeric: '3'
    },
    {
      original: 'f',
      numeric: 'F'
    },
    {
      original: 'g',
      numeric: '6'
    },
    {
      original: 'h',
      numeric: 'H'
    },
    {
      original: 'i',
      numeric: '1'
    },
    {
      original: 'j',
      numeric: 'J'
    },
    {
      original: 'k',
      numeric: 'K'
    },
    {
      original: 'l',
      numeric: 'L'
    },
    {
      original: 'm',
      numeric: 'M'
    },
    {
      original: 'n',
      numeric: 'N'
    },
    {
      original: 'ñ',
      numeric: 'Ñ'
    },
    {
      original: 'o',
      numeric: '0'
    },
    {
      original: 'p',
      numeric: '9'
    },
    {
      original: 'q',
      numeric: 'Q'
    },
    {
      original: 'r',
      numeric: 'R'
    },
    {
      original: 's',
      numeric: '5'
    },
    {
      original: 't',
      numeric: '7'
    },
    {
      original: 'u',
      numeric: 'U'
    },
    {
      original: 'v',
      numeric: 'V'
    },
    {
      original: 'w',
      numeric: 'W'
    },
    {
      original: 'x',
      numeric: 'X'
    },
    {
      original: 'y',
      numeric: 'Y'
    },
    {
      original: 'z',
      numeric: 'Z'
    }
  ];

  transform(text: string ): string {
    const mappedText = text.split('').map( letter => {
      this.abecedario.forEach( abcGroup => {
        if( abcGroup.original === letter )
          letter = abcGroup.numeric;
      });
      return letter;
    });

    return mappedText.join('');
  }


}
