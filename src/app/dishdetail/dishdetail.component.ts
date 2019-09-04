import { Component, OnInit, Input } from "@angular/core";
import { Dish } from "../shared/dish";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishdetailComponent implements OnInit {
  DISH = {
    id: "0",
    name: "Uthappizza",
    image: "/assets/images/uthappizza.png",
    category: "mains",
    featured: true,
    label: "Hot",
    price: "4.99",
    // tslint:disable-next-line:max-line-length
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza,\
      topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion,\
       Guntur chillies and Buffalo Paneer.",
    comments: [
      {
        rating: 5,
        comment: "Imagine all the eatables, living in conFusion!",
        author: "John Lemon",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating: 4,
        comment:
          "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        author: "Paul McVites",
        date: "2014-09-05T17:57:28.556094Z"
      },
      {
        rating: 3,
        comment: "Eat it, just eat it!",
        author: "Michael Jaikishan",
        date: "2015-02-13T17:57:28.556094Z"
      },
      {
        rating: 4,
        comment: "Ultimate, Reaching for the stars!",
        author: "Ringo Starry",
        date: "2013-12-02T17:57:28.556094Z"
      },
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: "25 Cent",
        date: "2011-12-02T17:57:28.556094Z"
      }
    ]
  };

  // @Input() dishDetail: Dish;
  dishDetail = this.DISH;

  // getComments(): string {
  //   let cmt = "";
  //   let i = 0;
  //   for (i = 0; i < this.dishDetail.comments.length; i++) {
  //     cmt += "\n" + this.dishDetail.comments[i].comment;
  //     cmt += "\n" + this.dishDetail.comments[i].rating + " stars";
  //     cmt +=
  //       "\n-- " +
  //       this.dishDetail.comments[i].author +
  //       "  " +
  //       new Date(this.dishDetail.comments[i].date).toDateString();
  //     cmt += "\n\n";
  //   }
  //   console.log(`${cmt}`);
  //   return `${cmt}`;
  // }

  constructor() {}
  ngOnInit() {}
}
