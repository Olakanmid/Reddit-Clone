export interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    upvotes: number;
    downvotes: number;
    comments: Comment[];
    createdAt: Date;
  }
  
  export interface Comment {
    id: string;
    content: string;
    author: string;
    createdAt: Date;
  }
  