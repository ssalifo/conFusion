import { Injectable } from "@angular/core";
import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: "root"
})
export class LeaderService {
  constructor() {}

  // getLeaders(): Leader[] {
  //   return LEADERS;
  // }
  // getLeader(id: string): Leader {
  //   return LEADERS.filter(leader => leader.id === id)[0];
  // }

  // getFeaturedLeader(): Leader {
  //   return LEADERS.filter(leader => leader.featured)[0];
  // }

  // getLeaders(): Promise<Leader[]> {
  //   return Promise.resolve(LEADERS);
  // }

  // getLeader(id: string): Promise<Leader> {
  //   return Promise.resolve(LEADERS.filter(leader => leader.id === id)[0]);
  // }

  // getFeaturedLeader(): Promise<Leader> {
  //   return Promise.resolve(LEADERS.filter(leader => leader.featured)[0]);
  // }

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getLeader(id: string): Promise<Leader> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(
        () => resolve(LEADERS.filter(leader => leader.id === id)[0]),
        2000
      );
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(
        () => resolve(LEADERS.filter(leader => leader.featured)[0]),
        2000
      );
    });
  }
}
