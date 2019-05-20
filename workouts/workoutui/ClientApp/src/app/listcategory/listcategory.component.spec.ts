/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListcategoryComponent } from './listcategory.component';

let component: ListcategoryComponent;
let fixture: ComponentFixture<ListcategoryComponent>;

describe('listcategory component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListcategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListcategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
