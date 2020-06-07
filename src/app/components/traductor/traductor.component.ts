import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.scss']
})
export class TraductorComponent implements OnInit {

  @ViewChild( 'textoTrad' ) textoTrad: ElementRef;

  textoBase = '';

  constructor() {
  }

  ngOnInit() {
  }

  copyToClipboard(): void {
    this.textoTrad.nativeElement.select();
    this.textoTrad.nativeElement.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");
  }

  async pasteFromClipboard(): Promise<any> {
    const text = await navigator.clipboard.readText();
    this.textoBase = text;
  }
}
