
var widget = document.querySelector('#widgetBox');
var article = document.querySelector('.ipsumStuff');


function timeToRead(str) {
  console.log(str);
  var count = str.split(' ');
  console.log(count.length);
  var time = Math.round(count.length / 230);
  return time;
}


console.log(typeof text);
console.log(typeof "hello error")
widget.textContent = timeToRead(article.textContent) + ' minutes to read';
