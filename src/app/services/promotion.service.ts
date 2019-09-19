import { Injectable } from "@angular/core";
import { Promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions";
// import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PromotionService {
  constructor() {}

  // getPromotions(): Promotion[] {
  //   return PROMOTIONS;
  // }
  // getPromotion(id: string): Promotion {
  //   return PROMOTIONS.filter(promo => promo.id === id)[0];
  // }

  // getFeaturedPromotion(): Promotion {
  //   return PROMOTIONS.filter(promo => promo.featured)[0];
  // }

  // getPromotions(): Promise<Promotion[]> {
  //   return Promise.resolve(PROMOTIONS);
  // }

  // getPromotion(id: string): Promise<Promotion> {
  //   return Promise.resolve(
  //     PROMOTIONS.filter(promotion => promotion.id === id)[0]
  //   );
  // }

  // getFeaturedPromotion(): Promise<Promotion> {
  //   return Promise.resolve(
  //     PROMOTIONS.filter(promotion => promotion.featured)[0]
  //   );
  // }

  // getPromotions(): Promise<Promotion[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(PROMOTIONS), 2000);
  //   });
  // }

  // getPromotion(id: string): Promise<Promotion> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(
  //       () => resolve(PROMOTIONS.filter(promo => promo.id === id)[0]),
  //       2000
  //     );
  //   });
  // }

  // getFeaturedPromotion(): Promise<Promotion> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(
  //       () => resolve(PROMOTIONS.filter(promo => promo.featured)[0]),
  //       2000
  //     );
  //   });
  // }

  // getPromotions(): Promise<Promotion[]> {
  //   return of(PROMOTIONS)
  //     .pipe(delay(2000))
  //     .toPromise();
  // }

  // getPromotion(id: string): Promise<Promotion> {
  //   return of(PROMOTIONS.filter(promo => promo.id === id)[0])
  //     .pipe(delay(2000))
  //     .toPromise();
  // }

  // getFeaturedPromotion(): Promise<Promotion> {
  //   return of(PROMOTIONS.filter(promo => promo.featured)[0])
  //     .pipe(delay(2000))
  //     .toPromise();
  // }

  getPriomotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.filter(promo => promo.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter(promo => promo.featured)[0]).pipe(delay(2000));
  }
}
