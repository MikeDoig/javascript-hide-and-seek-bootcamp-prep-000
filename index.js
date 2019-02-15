function getFirstSelector(selector) {
  return document.querySelector(selector);
}
 function nestedTarget() {
   return document.querySelector('#nested .target');
 }
function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list');

  for (let i=0; i<rank.length; i++) {
    let children = rank[i].children;

    for (let x=0; x<children.length; x++) {
      children[x].innerHTML = parseInt(children[x].innerHTML) + n;
    }
  }
}
 
// function deepestChild() {
//   const deep = document.getElementById('grand-node');
//   for (let i=0; i<deep.length; i++) {
//     deep[i].innerHTML = (i+1);
//   }
// }
 
 
 function deepestChild() {
   let current = document.getElementById('grand-node');
   let next = current.children[0];
   while (next) {
     current = next;
     next = current.children[0];
   }
   return current;
 }