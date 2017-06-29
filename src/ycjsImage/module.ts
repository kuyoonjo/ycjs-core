import { NgModule, ModuleWithProviders } from '@angular/core';
import { YcjsImageComponent } from './component';

@NgModule({
    declarations: [
        YcjsImageComponent
    ],
    exports: [
        YcjsImageComponent
    ]
})
export class YcjsImageModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: YcjsImageModule
        };
    }
}
