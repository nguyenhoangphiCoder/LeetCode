//de bai cho 2 so nguyen khong aam duoi dang linkedList trong do cac so duoc luu duoi dang nguoi lai
// moi node chua 1 chu so
// yeu cau :
// - cong hai so nguyen lai voi nhau
// - tra ve kq dang linkedList

//vd 1:
// input: l1=[2->4->3] ; l1=[5->6->4]
// output: [7->0->8]
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function addToNumber(l1, l2) {
  const dummy = new ListNode(0); //node gia de bat dau danh sach
  let current = dummy; // con tro hien tai trong danh sach ket qua
  let carry = 0; // gia tri ban dau
  // lap cho toi khi l1, l1 va carry deu khong con
  while (l1 !== null || l2 !== null || carry > 0) {
    //lay gia tri l1 va l2 neu ton tai
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    // tinh tong va gia tri du
    const sum = x + y + carry;
    carry = Math.floor(sum / 10); //gia tri du neu tong lon hon hoac bang 10

    //tao cac node moi chua phan tu le cua tong
    current.next = new ListNode(sum % 10);
    //chuyen con tro sang node tiep theo
    current = current.next;
    //di chuyen l1 va l2 neu con
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next; //bo qu node gia va tra ve ds ket qua
}
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const result = addToNumber(l1, l2);
console.log(result);
//vd 2:
// input:l1=[0] ; l1=[0]
// output :[0]
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addToNumber(l3, l4) {
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;
  while (l3 !== null || l4 !== null || carry > 0) {
    const x = l3 ? l3.val : 0;
    const y = l4 ? l4.val : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l3) l3 = l3.next;
    if (l4) l4 = l4.next;
  }
  return dummy.next;
}
const l3 = new ListNode(0);
const l4 = new ListNode(0);
const result1 = addToNumber(l3, l4);
console.log(result1);
//vd3:
// input: l1=[9->9->9->9->9] ; l2=[1]
// output: [0->0->0->0->0->1]
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function addToNumber(l5, l6) {
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;
  while (l5 !== null || l6 !== null || carry > 0) {
    const x = l5 ? l5.val : 0;
    const y = l6 ? l6.val : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l5) l5 = l5.next;
    if (l6) l6 = l6.next;
  }
  return dummy.next;
}
const l5 = new ListNode(
  9,
  new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
);
const l6 = new ListNode(1);
const result2 = addToNumber(l5, l6);
console.log(result2);
