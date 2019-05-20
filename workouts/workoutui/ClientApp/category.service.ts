import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from './category';

@Injectable()
export class CategoryService {
  private _url = 'http://localhost:60651/api/Category';
  constructor(private http: HttpClient) { }

  getAll(): Observable<category[]> {
    return this.http.get<category[]>(this._url);
  }
  

    }

