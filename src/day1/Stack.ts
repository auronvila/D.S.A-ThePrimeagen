type Node<T> = {
  value: T;
  prev?: Node<T>
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>


  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node = {value: item, prev: this.head} as Node<T>
    this.head = node;
    this.length++;
  }

  pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const headValue = this.head?.value;
    this.head = this.head?.prev;
    return headValue;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
