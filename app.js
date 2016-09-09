

var id = 0;
if(localStorage.length > 0){
  // var labels=[];
  id=0;
  var labe = document.createElement('LABEL')
  var b = document.createElement('BR')

  var chec = document.createElement('INPUT')
  chec.setAttribute('type', 'checkbox');


  var lab;
    var temp;
  var la;
  for (var i = 0; i < localStorage.length; i++) {
    lab = localStorage.getItem(i);
    if(lab.includes('strike'))
    {
      // temp = lab.split("<strike>");
      //  la  = temp[1].split("</strike>")

      // let childNode = document.getElementById('todoList').childNodes[childNodeIndex].innerHTML;

      labe.innerHTML = lab;
      chec.setAttribute("checked", "true");
      document.getElementById('todoList').appendChild(chec);
      document.getElementById('todoList').appendChild(labe);
      document.getElementById('todoList').appendChild(b);
      let childNodeIndex = 1;
      if (id !== 0) {
        childNodeIndex = (id*3)+1;
      }
      $(document.getElementById('todoList').childNodes[childNodeIndex]).attr('id', id);

      temp=[];
      la=[];
    }else{
      labe.innerHTML = lab;
      document.getElementById('todoList').appendChild(chec);
      document.getElementById('todoList').appendChild(labe);
      document.getElementById('todoList').appendChild(b);
      let childNodeIndex = 1;
      if (id !== 0) {
        childNodeIndex = (id*3)+1;
      }
      $(document.getElementById('todoList').childNodes[childNodeIndex]).attr('id', id);

    }
      id++;
  }
  // lab='';
  // labe='';
  // b='';
  // chec='';

}
// (function() {
var isList = [];

  var quotes = {
    Happy: ['Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.' ],
    Sad: ['Happiness depends upon ourselves','Things turn out best for people who make the best out of the way things turn out.','The greatest pleasure in life is doing what people say you cannot do.'],
    Motivation: ['It always seems impossible until its done.','Good, better, best. Never let it rest. \'Til your good is better and your better is best.','Always do your best. What you plant now, you will harvest later.'],
    Funny: ['A woman\'s mind is cleaner than a man\'s: She changes it more often.','I believe that if life gives you lemons, you should make lemonade... And try to find somebody whose life has given them vodka, and have a party.','Get your facts first, then you can distort them as you please.'],
  };
 $(".button-collapse").sideNav();
 function strike(event) {
   if((event.target.tagName !== 'LABEL') && (event.target.tagName !== 'INPUT')){
    //  console.log('This isn\'t the right type of element clicked');
     return false;
   }
  //  console.log('It\'s the right type of element!');
// console.log(event);
  var $s = $(event.target);
  console.log(event.target.id);
 //  console.log($s[0].checked);
  // for(var i = 0; i < $s.length; i++){
    // console.log($s[i]);
    //  console.log($s[i].checked);
  //  if($s[i].checked === true){
  // console.log($s.innerHTML);
     $s[0].innerHTML = $s[0].innerHTML.strike();
     let prev =  $s[0].previousSibling.checked = true;
     console.log(event.target);
     localStorage.setItem(event.target.id, document.getElementById(event.target.id).innerHTML)
  //  }
  // }
 //  $s.get(0).innerHTML = $s.get(0).innerHTML.strike();
}
var $list = $('#todoList').on('click', strike);

function todoList() {

// store user value
var br = document.createElement('BR')

var check = document.createElement('INPUT')
check.setAttribute('type', 'checkbox');

// check.addEventListener('onchange', strike);
var label = document.createElement('LABEL')
var item    = document.getElementById('todoInput').value
// create a text node from the user input
// var text    = document.createTextNode(item)
// create a li tag
// var newItem = document.createElement('li')
// add the user input to the li tag
label.innerHTML = item;
// newItem.appendChild(text)
// append the li to the html todoList id tag
document.getElementById('todoList').appendChild(check);
document.getElementById('todoList').appendChild(label);
document.getElementById('todoList').appendChild(br);
let childNodeIndex = 1;
if (id !== 0) {
  childNodeIndex = (id*3)+1;
}
$(document.getElementById('todoList').childNodes[childNodeIndex]).attr('id', id);
// let childNode = document.getElementById('todoList').childNodes[childNodeIndex].innerHTML;
let childNode = $(`#${id}`).text();
localStorage.setItem(id,childNode);
console.log(localStorage);
id++;
}
  $('#mood').change(function functionName(event) {
    var imageTabsDiv = $('#images').get(0).innerHTML='';
    $('#qoute').get(0).innerHTML= "";
    let mood = event.target.value;
    let length = quotes[mood].length;
    // console.log(mood);
    // console.log(quotes[mood].length);
    // var rand = myArray[Math.floor(Math.random() * myArray.length)];
    $('#qoute').append(quotes[mood][Math.floor(Math.random() * length)]);
    // console.log(quotes[mood][Math.floor(Math.random() * length)]);
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${mood}&api_key=dc6zaTOxFJmzC`);
    xhr.done(function(data) {

      imageTabsDiv = $('#images').get(0);
       //
      //  console.log("success got data", data);
      //  console.log(data.data.length);
      // console.log(data);
         for(var i = 0; i < data.data.length; i++)
         {
            //  console.log(data.data[i].images.downsized.url);
             var img = document.createElement("img");
             img.src = data.data[i].images.fixed_height.url ;
             imageTabsDiv.appendChild(img);


     }

    });
  });

var $submitButton = $('#submit');
