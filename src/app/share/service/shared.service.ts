import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DataService {
    pageActived = new Subject<number>();
    private _categoryActived: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public categoryActived: Observable<number> = this._categoryActived.asObservable();

    setCategoryActived(id: number) {
        this._categoryActived.next(id);
      }
}