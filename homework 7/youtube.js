class YouTubeVideo {
  #title;
  #likes = 0;
  #dislikes = 0;
  #views = 0;

  constructor(title) {
    this.#title = title;
  }

  like() {
    this.#likes++;
    console.log(`Video "${this.#title}" liked! Total likes:${this.#likes}`);
  }

  dislike() {
    this.#dislikes++;

    console.log(
      `Видео "${this.#title}" получило дизлайк! Общее количество дизлайков: ${
        this.#dislikes
      }`
    );
  }
  addView() {
    this.#views++;

    console.log(
      `Видео "${this.#title}" просмотрено! Общее количество просмотров: ${
        this.#views
      }`
    );
  }
  getInfo() {
    return `Video: ${this.#title},\nLikes: ${this.#likes},\nDislikes: ${
      this.#dislikes
    },\nViews: ${this.#views}
    `;
  }
}

const myVideo = new YouTubeVideo('Урок JavaScript');

myVideo.like();

myVideo.dislike();

myVideo.addView();

console.log(myVideo.getInfo());
