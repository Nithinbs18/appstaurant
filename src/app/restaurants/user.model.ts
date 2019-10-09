export class userList {
    public email: string;
    public list: string[];
  
    constructor(name: string, list: string[]) {
      this.email = name;
      this.list = list;
    }
  }