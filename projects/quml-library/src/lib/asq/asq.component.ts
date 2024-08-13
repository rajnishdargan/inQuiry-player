import { Component,Input,Output,EventEmitter} from '@angular/core';
import {AsqOptions,AsqInteractions} from '../interfaces/asq-interface';

@Component({
  selector: 'quml-asq',
  templateUrl: './asq.component.html'
})
export class AsqComponent {
  @Input() question?: any;
  @Input() shuffleOptions: boolean;
  @Input() replayed: boolean;
  @Input() tryAgain?: boolean;
  @Output() optionsReordered = new EventEmitter<AsqOptions>();

  public interactions?: AsqInteractions;
  public questionBody?: string;
  public layout: 'VERTICAL' | 'HORIZONTAL' | 'DEFAULT';

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.setLayout();
    this.interactions = this.question?.interactions;
    this.questionBody = this.question?.body;
  }

  setLayout(): void {
    const templateId = this.question?.templateId;
    if (templateId === 'asq-vertical') {
      this.layout = 'VERTICAL';
    } else if (templateId === 'asq-horizontal') {
      this.layout = 'HORIZONTAL';
    } else {
      console.error('Invalid or undefined templateId');
      this.layout = 'DEFAULT';
    }
  }

  handleReorderedOptions(reorderedOptions: AsqOptions) {
    this.optionsReordered.emit(reorderedOptions);
  }
}
