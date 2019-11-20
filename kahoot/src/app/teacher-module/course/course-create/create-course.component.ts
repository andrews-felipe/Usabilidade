import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent implements OnInit {

  feedback_flag : boolean

  @ViewChild('openModal') openModal: ElementRef;

  @ViewChild('closing') closing: ElementRef;

  @Output() closeEvent = new EventEmitter()

  
  constructor() { }

  ngOnInit() {
    this.openModal.nativeElement.click();
  }

  close() {
    this.feedback_flag = true
    setTimeout(() => {
      this.closing.nativeElement.click();
      this.closeEvent.emit()
    }, 1500);
  }

}
