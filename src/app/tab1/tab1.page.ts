import { Component } from '@angular/core';
import { User } from '../models/user';
import { Post } from '../models/post';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts: Post[] = [];

  constructor() {
    let user1 = new User(1, "john_doe", "https://mywebsite.com/user1.jpg");
    let post1 = new Post(1, "https://mywebsite.com/post1.jpg", "Titre du post 1", "Sous-titre du post 1", "Contenu du post 1", user1);

    let user2 = new User(2, "jane_doe", "https://mywebsite.com/user2.jpg");
    let post2 = new Post(2, "https://mywebsite.com/post2.jpg", "Titre du post 2", "Sous-titre du post 2", "Contenu du post 2", user2);

    this.posts.push(post1);
    this.posts.push(post2);
  }

}

