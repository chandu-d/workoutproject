import { Component, OnInit } from '@angular/core';
import { category } from '../../../category';
import { CategoryService } from '../../../category.service';
import { error } from 'protractor';

@Component({
    selector: 'app-listcategorycomponent',
    templateUrl: './listcategory.component.html',
    styleUrls: ['./listcategory.component.css']
})
/** listcategory component*/
export class ListcategoryComponent implements OnInit {
  category: category[];
    /** listcategory ctor */
  constructor(private service: CategoryService) { }
  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.category=data,
      (error) => alert('Error processing request')
    );
  }

    }
