/**
 * Definition of singly linked list
 * function ListNode(val) {
 *  this.val = val;
 *  this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast,
    slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

var hasCycleX = function (head) {
  const s = new Set();
  for (; head; head = head.next) {
    if (s.has(head)) {
      return true;
    }
    s.add(head);
  }
  return false;
};

/**
 * Solution: Hash Table
 * Traverse the linked list and use a hash table s to record each node. When a node appears for the second time, it indicates that there is a cycle, and the function returns tree. Otherwise, when the linked list
 * traversal ends, return false.
 *
 * t = O(n)
 * s = O(n)
 * n = number of nodes in the linked list
 *
 * Solution: Fast and Slow Pointers
 * Define two pointers, fast and slow, both initially pointing to head
 * The fast pointer moves two steps at a time, and the slow pointer moves one step at a time, in a continous loop. When the fast and slow pointers meet, it indicates that there is a cyle in the linked list. if the loop
 * ends without the pointers meeting, it indicates that there is no cycle in the linked list.
 *
 * The tiime complexity is O(n), the space complexity  is O(1), where n is the number of nodes in the linked list.
 *
 *
 */
