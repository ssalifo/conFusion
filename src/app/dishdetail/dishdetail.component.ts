import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Dish } from "../shared/dish";
import { DishService } from "../services/dish.service";
import { Leader } from "../shared/leader";
import { LeaderService } from "../services/leader.service";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  leader: Leader;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private leaderService: LeaderService
  ) {}

  ngOnInit() {
    // let id = this.route.snapshot.params["id"];
    const id = this.route.snapshot.params["id"];
    // this.dish = this.dishService.getDish(id);
    // this.dishService.getDish(id).then(dish => (this.dish = dish));
    this.dishService.getFeaturedDish().subscribe(dish => (this.dish = dish));
  }

  goBack(): void {
    this.location.back();
  }
}
