import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagPipe } from '../../pipes/tag.pipe';
import { CutStringPipe } from '../../pipes/cut-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TagPipe, CutStringPipe],
  declarations: [TagPipe, CutStringPipe]
})
export class PipesModule { }
