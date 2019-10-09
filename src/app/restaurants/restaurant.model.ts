import { comments } from './restaurant.model.comments';

export class Restaurant {
    public name: string;
    public description: string;
    public imagePath: string[];
    public comments: comments[];
    public route : string;
  
    constructor(name: string, desc: string, imagePath: string[], comments :comments[], route:string) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.comments=comments;
      this.route=route;
    }
  }