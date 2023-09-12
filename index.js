class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  
  prepend(value) {
    this.head = new Node(value, this.head);
  }
  
  append(value) {
    if (this.head === null) return this.prepend(value);
    let tmp = this.head;
    while (tmp.next !== null) tmp = tmp.next;
    tmp.next = new Node(value, null);
  }
  
  size() {
    let total = 0;
    let tmp = this.head;
    while (tmp != null) {
      total++;
      tmp = tmp.next;
    }
    return total;
  }
  
  getHead() {
    return this.head;
  }
  
  getTail() {
    let cur = this.head;
    let prev = null;
    while (cur !== null) {
      prev = cur;
      cur = cur.next;
    }
    return prev;
  }
  
  at(index) {
    let tmp = this.head;
    let currentIndex = 0;
    while (tmp !== null && currentIndex !== index) {
      currentIndex++;
      tmp = tmp.next;
    }
    return tmp;
  }
  
  pop(value) {
    if (this.head === null) throw new Error('cannot delete');
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let cur = this.head;
    let prev = null;
    while (cur !== null && cur.value !== value) {
      prev = cur;
      cur = cur.next;
    }
    if (cur === null) throw new Error('cannot delete');
    prev.next = cur.next;
  }
  
  contains(value) {
    let tmp = this.head;
    while (tmp !== null && tmp.value !== value) tmp = tmp.next;
    if (tmp === null) return false;
    return true;
  }
  
  find(value) {
    let tmp = this.head;
    let currentIndex = 0;
    while (tmp !== null && tmp.value !== value) {
      currentIndex++;
      tmp = tmp.next;
    }
    if (tmp === null) return tmp;
    return currentIndex;
  }
  
  toString() {
    let tmp = this.head;
    let str = '';
    while (tmp !== null) {
      str += `( ${tmp.value} ) -> `;
      tmp = tmp.next;
    }
    return str += 'null'
  }
  
  insertAt(value, index) {
    if (index === 0) {
      let tmp = this.head;
      this.head = new Node(value, tmp);
      return;
    }
    let cur = this.head;
    let prev = null;
    let currentIndex = 0;
    while (cur !== null && currentIndex !== index) {
      currentIndex++;
      prev = cur;
      cur = cur.next;
    }
    if (cur === null) throw Error('cannot insert');
    prev.next = new Node(value, cur);
  }
  
  removeAt(index) {
    if (this.head === null) throw Error('cannot remove');
    if (index === 0) return this.head = this.head.next;
    let cur = this.head;
    let prev = null;
    let currentIndex = 0;
    while (cur !== null && currentIndex !== index) {
      currentIndex++;
      prev = cur;
      cur = cur.next;
    }
    if (cur === null) throw Error('cannot remove');
    prev.next = cur.next;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
