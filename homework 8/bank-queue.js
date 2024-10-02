class BankQueue {
  queue = [];

  addClient(name) {
    this.queue.push(name);
  }

  serveClient() {
    const servedClient = this.queue.shift();
    console.log(`Client ${servedClient} has been served`);
  }

  getQueue() {
    console.log(this.queue);
  }
}

const bankQueue = new BankQueue();

bankQueue.addClient('Иван');
bankQueue.addClient('Анна');
bankQueue.addClient('Сергей');

bankQueue.serveClient();

bankQueue.getQueue();

bankQueue.addClient('Мария');

bankQueue.serveClient();

bankQueue.getQueue();
