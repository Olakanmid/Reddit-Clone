import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor() {
    this.posts = [
      {
        id: uuidv4(),
        title: 'Welcome to Reddit Clone!',
        content: 'This is a simple Reddit clone built with Angular and Tailwind CSS.',
        author: 'admin',
        upvotes: 10,
        downvotes: 2,
        comments: [],
        createdAt: new Date(),
      },
      // Add more sample posts
    ];
  }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPostById(id: string): Observable<Post | undefined> {
    const post = this.posts.find(post => post.id === id);
    return of(post);
  }

  addPost(post: Post): void {
    this.posts.push(post);
  }

  upvotePost(id: string): void {
    const post = this.posts.find(post => post.id === id);
    if (post) {
      post.upvotes += 1;
    }
  }

  downvotePost(id: string): void {
    const post = this.posts.find(post => post.id === id);
    if (post) {
      post.downvotes += 1;
    }
  }
}
