import { User } from "./user";

export class Post {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    content: string;
    user: User;
  
    constructor(
      id: number,
      image: string,
      title: string,
      subtitle: string,
      content: string,
      user: User
    ) {
      this.id = id;
      this.image = image;
      this.title = title;
      this.subtitle = subtitle;
      this.content = content;
      this.user = user;
    }
  }