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
   const deep = document.getElementById('grand-node').querySelector
   return document.querySelectorAll('#grand-node div div div div');
 }