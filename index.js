let news = document.querySelectorAll('.new');
let popUp = document.querySelector('.popUp');
let title = popUp.querySelector('section').querySelector('h3');
let text = popUp.querySelector('section').querySelector('p');

function openNews(num){
     popUp.style.display = 'flex';
     title.innerHTML = news[num].querySelector('.new__title').innerHTML;
     text.innerHTML = news[num].querySelector('.new__title').innerHTML+':'+news[num].querySelector('.new__text-more').innerHTML;
};

popUp.onclick = function(){
    popUp.style.display = 'none';
    title.innerHTML = '';
    text.innerHTML = '';
};

