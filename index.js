function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}
 
 function increaseRankBy(n)
  var lis = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }