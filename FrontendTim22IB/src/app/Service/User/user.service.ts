import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private value$ = new BehaviorSubject<any>({});
  selectedValue$ = this.value$.asObservable();

  constructor(private http: HttpClient) { }

  setValue(test: any) {
    this.value$.next(test);
  }
}
