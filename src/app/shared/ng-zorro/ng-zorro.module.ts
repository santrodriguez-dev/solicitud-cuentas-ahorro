import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../../icons-provider.module';

import { NgZorroAntdModule, NzFormModule, NzMessageModule, NzTableModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,
    NzFormModule,
    NzMessageModule,
    IconsProviderModule,
    NzTableModule
  ],
  exports: [
    NgZorroAntdModule,
    NzFormModule,
    NzMessageModule,
    IconsProviderModule,
    NzTableModule
  ]
})
export class NgZorroModule { }
