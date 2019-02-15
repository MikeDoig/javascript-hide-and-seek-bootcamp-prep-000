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
 
 function deepestChild() {
   let current = document.getElementById('grand-node');
   let next = current.children[1];
   while (next) {
     current = next;
     next = current.children[1];
   }
   return current;
 }