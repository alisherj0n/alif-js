class Post {
  constructor(title, content, author, likes) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.likes = 0;
  }

  updateContent(newContent) {
    this.content = newContent;
  }

  addLike() {
    this.likes++;
    console.log(`Your post has been liked. Total likes: ${this.likes}`);
  }

  deletePost() {
    this.title = '';
    this.content = '';
    this.author = '';
    this.likes = '';
  }

  displayPost() {
    if (this.content && this.title && this.author) {
      console.log(
        `Post: ${this.title},\n Author: ${this.author},\n Content: ${this.content},\n Likes: ${this.likes}`
      );
    }

    console.log(`Your post has been deleted`);
  }
}

const post1 = new Post(
  'Мой первый пост',
  'Это мой первый пост в социальной сети!',
  'Иван Иванов'
);

post1.displayPost();

post1.addLike();

post1.displayPost();

post1.deletePost();
post1.displayPost();
