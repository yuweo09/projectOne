(function() {
  'use strict';
  let id = 0;

  if (localStorage.length > 0) {
    id = 0;

    const labe = document.createElement('LABEL');

    const bre = document.createElement('BR');

    const chec = document.createElement('INPUT');

    chec.setAttribute('type', 'checkbox');
    let lab;

    let tdl = $(document.getElementById('todoList'));

    for (let i = 0; i < localStorage.length; i++) {
      lab = localStorage.getItem(i);
      if (lab.includes('strike')) {
        labe.innerHTML = lab;
        chec.setAttribute('checked', 'true');
        document.getElementById('todoList').appendChild(chec);
        document.getElementById('todoList').appendChild(labe);
        document.getElementById('todoList').appendChild(bre);
        let childNodeIndex = 1;

        if (id !== 0) {
          childNodeIndex = (id * 3) + 1;
        }
        tdl = $(document.getElementById('todoList'));

        tdl.childNodes[childNodeIndex].attr('id', id);
      }
      else {
        labe.innerHTML = lab;
        document.getElementById('todoList').appendChild(chec);
        document.getElementById('todoList').appendChild(labe);
        document.getElementById('todoList').appendChild(bre);

        let childNodeIndex = 1;

        if (id !== 0) {
          childNodeIndex = (id * 3) + 1;
        }
        tdl = $(document.getElementById('todoList'));

        tdl.childNodes[childNodeIndex].attr('id', id);
      }
      id++;
    }
  }
  const quotes = {
    Happy: ['Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.'],
    Sad: ['Happiness depends upon ourselves', 'Things turn out best for people who make the best out of the way things turn out.', 'The greatest pleasure in lif e is doing what people say you cannot do.'],
    Motivation: ['It always seems impossible until its done.', 'Good, better, best. Never let it rest. \'Til your good is better and your better is best.', 'Always do your best. What you plant now, you will harvest later.'],
    Funny: ['A woman\'s mind is cleaner than a man\'s: She changes it more often.', 'I believe that if  lif e gives you lemons, you should make lemonade... And try to find somebody whose lif e has given them vodka, and have a party.', 'Get your facts first, then you can distort them as you please.']
  };

  $('.button-collapse').sideNav();

  const strike = function(event) {
    if ((event.target.tagName !== 'LABEL') && (event.target.tagName !== 'INPUT')) {
      return false;
    }
    const $lbl = $(event.target);

    $lbl[0].innerHTML = $lbl[0].innerHTML.strike();
    $lbl[0].previousSibling.checked = true;

    localStorage.setItem(event.target.id, document.getElementById(event.target.id).innerHTML);
  };
  $('#todoList').on('click', strike);

  function todoList() {
    const br = document.createElement('BR');

    const check = document.createElement('INPUT');

    check.setAttribute('type', 'checkbox');

    const label = document.createElement('LABEL');

    const item = document.getElementById('todoInput').value;

    label.innerHTML = item;
    document.getElementById('todoList').appendChild(check);
    document.getElementById('todoList').appendChild(label);
    document.getElementById('todoList').appendChild(br);
    let childNodeIndex = 1;

    if (id !== 0) {
      childNodeIndex = (id * 3) + 1;
    }
    $(document.getElementById('todoList').childNodes[childNodeIndex]).attr('id', id);
    const childNode = $(`#${id}`).text();

    localStorage.setItem(id, childNode);
    id++;
  }
  $('#mood').change(function (event) {
    let imageTabsDiv = $('#images').get(0).innerHTML = '';

    $('#qoute').get(0).innerHTML = '';

    const mood = event.target.value;

    const length = quotes[mood].length;

    $('#qoute').append(quotes[mood][Math.floor(Math.random() * length)]);
    const xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${mood}&api_key=dc6zaTOxFJmzC`);

    xhr.done(function(data) {
      imageTabsDiv = $('#images').get(0);
      for (let i = 0; i < data.data.length; i++) {
        const img = document.createElement('img');

        img.src = data.data[i].images.fixed_height.url;
        imageTabsDiv.appendChild(img);
      }
    });
  });
}());
