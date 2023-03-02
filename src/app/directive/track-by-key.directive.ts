import { Directive, Host, Input, NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';

@Directive({
  selector: '[ngFor][ngForTrackByKey]'
})
export class NgForTrackByKeyDirective<T extends Record<string,unknown>> {
  @Input('ngForTrackByKey')
  key!: keyof T;
  constructor(@Host() ngFor: NgForOf<T>) { 
    ngFor.ngForTrackBy = (_, item: T): T[keyof T] => item[this.key];
  }
}

@NgModule({
  declarations: [NgForTrackByKeyDirective],
  exports: [NgForTrackByKeyDirective]
})
export class DirectiveModule {}
