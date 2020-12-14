class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (!curr.left) {
          curr.left = node;
          return this;
        }
        curr = curr.left;
      }
      else {
        if (!curr.right) {
          curr.right = node;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    const start = this.root;
    function _insert(curr = start) {
      if (val < curr.val && !curr.left) {
        curr.left = node;
        return;
      }
      if (val > curr.val && !curr.right) {
        curr.right = node;
        return;
      }
      _insert(val < curr.val ? curr.left : curr.right);
    }

    _insert();
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curr = this.root;
    while (curr) {
      if (val === curr.val) return curr;
      curr = val < curr.val ? curr.left : curr.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const start = this.root;
    function _find(curr = start) {
      if (!curr) return;
      if (curr.val === val) return curr;
      return _find(val < curr.val ? curr.left : curr.right);
    }
    return _find();
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = [];
    const start = this.root;
    function _traverse(curr = start) {
      arr.push(curr.val);
      if (curr.left) _traverse(curr.left);
      if (curr.right) _traverse(curr.right);
      return arr;
    }
    return _traverse();
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arr = [];
    const start = this.root;
    function _traverse(curr = start) {
      if (curr.left) _traverse(curr.left);
      arr.push(curr.val);
      if (curr.right) _traverse(curr.right);
      return arr;
    }
    return _traverse();
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arr = [];
    const start = this.root;
    function _traverse(curr = start) {
      if (curr.left) _traverse(curr.left);
      if (curr.right) _traverse(curr.right);
      arr.push(curr.val);
      return arr;
    }
    return _traverse();
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const arr = [this.root];
    let ptr = 0;
    while (ptr < arr.length) {
      let curr = arr[ptr++];
      if (curr.left) arr.push(curr.left);
      if (curr.right) arr.push(curr.right);
    }
    return arr.map(node => node.val);
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

    const start = this.root;
    let bal = true;
    function _height(curr = start, h = 0) {
      if (!bal) return 0;
      if (!curr) return h;
      const h1 = _height(curr.left, h + 1);
      const h2 = _height(curr.right, h + 1);
      if (Math.abs(h1 - h2) > 1) bal = false;
      return Math.max(h1, h2);
    }

    _height();
    return bal;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    if (!this.root || !this.root.left && !this.root.right) return;
    else if (!this.root.right) return this.root.left.val;

    function _helper(node) {
      if (!node.right.right) return node.val;
      return _helper(node.right);
    }
    return _helper(this.root);
  }
}

module.exports = BinarySearchTree;
