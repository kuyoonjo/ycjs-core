import { NgModule, ModuleWithProviders } from '@angular/core';
import { YcjsAPI } from './service';

export function YcjsAPIFactory(root: string): YcjsAPI {
  return new YcjsAPI(root);
}

export const YcjsAPIRoot: string = 'http://localhost';

@NgModule({})
export class YcjsAPIModule {

  static forRoot(root: string = YcjsAPIRoot): ModuleWithProviders {
    return {
      ngModule: YcjsAPIModule,
      providers: [
        { provide: YcjsAPIRoot, useValue: root },
        {
          provide: YcjsAPI,
          useFactory: YcjsAPIFactory,
          deps: [YcjsAPIRoot]
        }
      ],
    };
  }

}