class Reel {
  constructor(title, duration, likes, views) {
    this.title = title;
    this.duration = duration;
    this.likes = 0;
    this.views = 0;
  }

  like() {
    return this.likes++;
  }

  addView() {
    return this.views++;
  }

  getInfo() {
    return `Reels: ${this.title},\nDuration: ${this.duration},\nLikes: ${this.likes},\nViews: ${this.views}`;
  }
}

const myReel = new Reel('Мой первый рилс', 30);

myReel.like();

myReel.addView();

console.log(myReel.getInfo());
