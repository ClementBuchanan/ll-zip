"use strict";

const Node = function (data, next) {
  this.data = data;
  this.next = next;
};

const merge = function (L1, L2) {
  //creating a new linked list pointer
  let L3 = new Node(null, null);
  let prev = L3;

  //while both lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }

  //once we get to the end of the list we append
  //it to the other list because it is already sorted
  if (L1 === null) {
    prev.next = L2;
  }
  if (L2 === null) {
    prev.next = L1;
  }

  //return the sorted linked list
  return L3.next;
};

//create first linked list L1: 1 -> 3 -> 10
let n3 = new Node(10, null);
let n2 = new Node(3, n3);
let n1 = new Node(1, n2);
let L1 = n1;

//create second linked list L2: 5 -> 6 -> 9
let n6 = new Node(9, null);
let n5 = new Node(6, n6);
let n4 = new Node(5, n5);
let L2 = n4;

//merged linked list: 1 -> 3 -> 5 -> 6 -> 9 -> 10
merge(L1, L2);
