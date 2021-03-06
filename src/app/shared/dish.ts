// import { SpawnSyncOptionsWithBufferEncoding } from "child_process";
import { Comment } from "./comment";

export class Dish {
  id: string;
  // id: number;
  name: string;
  image: string;
  category: string;
  featured: boolean;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}
