import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes";
// import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DishService {
  constructor() {}

  // getDishes(): Dish[] {
  //   return DISHES;
  // }
  // getDish(id: string): Dish {
  //   return DISHES.filter(dish => dish.id === id)[0];
  // }

  // getFeaturedDish(): Dish {
  //   return DISHES.filter(dish => dish.featured)[0];
  // }

  // getDishes(): Promise<Dish[]> {
  //   return Promise.resolve(DISHES);
  // }

  // getDish(id: string): Promise<Dish> {
  //   return Promise.resolve(DISHES.filter(dish => dish.id === id)[0]);
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return Promise.resolve(DISHES.filter(dish => dish.featured)[0]);
  // }

  // getDishes(): Promise<Dish[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(DISHES), 2000);
  //   });
  // }

  // getDish(id: string): Promise<Dish> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(DISHES.filter(dish => dish.id === id)[0]), 2000);
  //   });
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(DISHES.filter(dish => dish.featured)[0]), 2000);
  //   });
  // }

  // getDishes(): Promise<Dish[]> {
  //   return of(DISHES)
  //     .pipe(delay(2000))
  //     .toPromise();
  // }

  // getDish(id: string): Promise<Dish> {
  //   return of(DISHES.filter(dish => dish.id === id)[0])
  //     .pipe(delay(2000))
  //     .toPromise();
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return of(DISHES.filter(dish => dish.featured)[0])
  //     .pipe(delay(2000))
  //     .toPromise();
  // }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter(dish => dish.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter(dish => dish.featured)[0]).pipe(delay(2000));
  }
}
