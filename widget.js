
var widget = document.querySelector('#widgetBox');
var article = document.querySelector('.ipsumStuff');


function timeToRead(str) {
  console.log(str);
  var count = str.split(' ');
  console.log(count.length);
  var time = Math.round(count.length / 230);
  return time;
}

var estimate = document.createElement('h3');
console.log(typeof text);
console.log(typeof "hello error")
estimate.textContent = timeToRead(article.textContent) + ' minutes to read';

widget.appendChild(estimate);
