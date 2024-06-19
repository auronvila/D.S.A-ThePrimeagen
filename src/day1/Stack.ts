type QNode<T> = {
  value: T;
  prev?: QNode<T>
}
export default class Stack<T> {
  public length: number;
  public head?: QNode<T>


  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    this.length++;
    const node = {value: item, next: this.head} as QNode<T>;
    if (!this.head) {
      this.head = node;
      return
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0,this.length - 1)
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value
    }

    const head = this.head;
    this.head = this.head?.prev;

    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
