var Links = {
  setColor:function (color){
    var alist = document.querySelectorAll('a');
    var i = 1;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    document.querySelector('#title a').style.color = 'white';
    self.value = 'day';

    Links.setColor('powderblue');
    } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    document.querySelector('#title a').style.color = 'black';
    self.value = 'night';

    Links.setColor('blue');
    }
 }
