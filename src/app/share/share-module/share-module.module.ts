import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [ CommonModule, FlexLayoutModule ],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule { 
  static forRoot(): ModuleWithProviders<ShareModule> {
    return {
      ngModule: ShareModule
    }
  }
}
