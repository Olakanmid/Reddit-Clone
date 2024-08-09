import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  newComment = '';

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(post => {
        this.post = post;
      });
    }
  }

  upvote(): void {
    if (this.post) {
      this.postService.upvotePost(this.post.id);
    }
  }

  downvote(): void {
    if (this.post) {
      this.postService.downvotePost(this.post.id);
    }
  }

  addComment(): void {
    if (this.post && this.newComment.trim()) {
      this.post.comments.push({
        id: Math.random().toString(36).substring(2),
        content: this.newComment,
        author: 'Anonymous',
        createdAt: new Date()
      });
      this.newComment = '';
    }
  }
}
