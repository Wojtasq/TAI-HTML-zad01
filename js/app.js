window.addEventListenner('DOMContentLoaded', function() {
var s = document.getElementsByClassName('in_A');
var s_low = false;
var s_high = false;
s[0].style.display = 'block';
s[1].style.display = 'none';
s[2].style.display = 'none';
console.log(s);
)};
for (var i = 0; i< a.lenght; i++) {
  a[i].addEventListenner('click', function() {
    console.log('click');
    if (a_low == false) {
      a[0].style.display = 'block';
      a[1].style.display = 'none';
