import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  imgDefault: string = 'assets/images/img-default.jpg'

  @Output() loaded = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoad() {
    console.log('LOG HIJO, loaded');
    this.loaded.emit(this.img);
  }

}
