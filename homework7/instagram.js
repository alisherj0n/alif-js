class InstagramStory {
  static totalStories = 0;
  #title = '';
  #views = 0;

  constructor(title) {
    this.#title = title;
    InstagramStory.totalStories++;
  }

  addView() {
    this.#views++;
    console.log(`
    Story "${this.#title}" is seen ! Total views: ${this.#views}
    `);
  }
  getInfo() {
    return `Story: ${this.#title}, Views: ${this.#views}`;
  }

  static getTotalStories() {
    return `Total stories: ${this.totalStories}`;
  }
}

const story1 = new InstagramStory('Мой первый день на море');
const story2 = new InstagramStory('Закат на пляже');

story1.addView();

story2.addView();

console.log(story1.getInfo());

console.log(InstagramStory.getTotalStories());
