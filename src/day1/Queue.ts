type Node<T> = {
  value: T;
  next: Node<T>
}
export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;


  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  // add an item
  enqueue(item: T): void {
    const node = {value: item} as Node<T>
    if (!this.tail) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  // remove the item
  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const headValue = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      return undefined
    }

    return headValue;
  }

  // get the value of the item that is the head
  peek(): T | undefined {
    return this.head?.value;
  }
}
