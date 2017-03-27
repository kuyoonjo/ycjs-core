import { Injectable } from '@angular/core';

@Injectable()
export class YcjsAPI {
    private __root: string;

    constructor(__root: string) {
        this.__root = __root;
    }

    get root(): string {
        return this.__root;
    }
}