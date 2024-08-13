import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AsqOptions } from '../../interfaces/asq-interface';
import * as _ from 'lodash-es';

@Component({
  selector: 'quml-asq-options',
  templateUrl: './asq-options.component.html',
  styleUrls: ['./asq-options.component.scss'],
})
export class AsqOptionsComponent implements OnInit, OnChanges {
  @Input() options: any[];
  @Input() layout: string;
  @Input() shuffleOptions: boolean;
  @Input() replayed: boolean;
  @Input() tryAgain?: boolean;
  @Output() reorderedOptions = new EventEmitter<AsqOptions[]>();
  shuffledOptions: any[];
  optionsShuffled = false;
  isModalVisible: boolean = false;
  selectedImageSrc: string = '';

  constructor() {
    this.shuffledOptions = [];
  }

  ngOnInit() {
    this.shuffleMTFOptions();
    
  }

  ngOnChanges(): void {
    if(this.replayed || this.tryAgain) {
      this.shuffleMTFOptions();
    }
  }

  shuffleMTFOptions() {
    // Shuffle the options
    this.shuffledOptions = _.shuffle(this.options);
    this.optionsShuffled = true;

    // Ensure no item retains its original position
    let isSameAsOriginal = this.shuffledOptions.some((item, index) => item.value === this.options[index].value);
    while (isSameAsOriginal) {
      this.shuffledOptions = _.shuffle(this.options);
      isSameAsOriginal = this.shuffledOptions.some((item, index) => item.value === this.options[index].value);
    }
  }

  onDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.shuffledOptions, event.previousIndex, event.currentIndex);
   this.reorderedOptions.emit(this.shuffledOptions);
  }

  swapOptions(index1: number, index2: number) {
    [this.shuffledOptions[index1], this.shuffledOptions[index2]] = [
      this.shuffledOptions[index2],
      this.shuffledOptions[index1],
    ];
  }
}
