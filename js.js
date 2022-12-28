let left_btn=document.querySelector('.left_link');
let right_btn=document.querySelector('.right_link');
let body=document.body;
let bg=['url(./img/bg.jpg)','url(./img/bg1.jpg)','url(./img/bg2.jpg)']
let index=1;
let slider_width=document.querySelector('.slider_block').clientWidth;
let slider=document.querySelector('.slider_line');
let input=document.querySelector('.input');
let burger=document.querySelector('.header_burger');
let nav=document.querySelector('.nav_list');
let close=document.querySelector('.header_nav_close');
let btn=document.querySelector('.btn');
let search=document.querySelector('.search_btn');
let header=document.querySelector('.header');
let main=document.querySelector('.main');
let footer=document.querySelector('.footer');


// Burger

    burger.addEventListener('click',()=>{
        if (window.innerWidth<=414)
        {nav.style.display='block';
        header.style.marginTop='0';
        main.style.display='none';
        footer.style.display='none';
        }


        nav.classList.remove('nav_list');
        nav.classList.remove('nav_list_disactive');
        nav.classList.add('nav_list_active');
        burger.style.display='none';
        close.style.display='flex';
        btn.style.display='none';
        search.style.display='none';
        
    })
    close.addEventListener('click',()=>{
        if (window.innerWidth<=414) {
        main.style.display='block';
        footer.style.display='block';
        header.style.marginTop='20px';
        nav.style.display='none';
        }
        nav.classList.add('nav_list_disactive');
        nav.classList.remove('nav_list_active');
        close.style.display='none';
        burger.style.display='flex';
        btn.style.display='flex';
        search.style.display='flex';
        
    })
    

//Кнопка вправо
function changeSlideRight () {
    if (index>bg.length-1) 
    {index=0}
slider.style.left=-slider_width*index+'px';
}


function changeBGRight() {
    body.style.backgroundImage=bg[index];
    index++;
    console.log('номер слайда',index);
}

right_btn.addEventListener('click',()=>{
    changeSlideRight();
    changeBGRight();
    inputSelect()
})



//Кнопка влево
function changeSlideLeft () {
    if (index==1) 
    {index=4}
slider.style.left=-slider_width*(index-2)+'px';
}


function changeBGLeft() {
    index--;
    body.style.backgroundImage=bg[index-1];
    console.log('номер слайда',index);
}

left_btn.addEventListener('click',()=>{
    changeSlideLeft();
    changeBGLeft();
    inputSelect();
})


//input
function inputSelect() {
    input.value=index;
}

input.addEventListener('click',()=>{
    if ((index-input.value)>=0) {changeSlideLeft ();}
    else {changeSlideRight ()}
    index=input.value;
    body.style.backgroundImage=bg[index-1];
});

