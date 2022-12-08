// slide buttons function start
const leftbtn = document.querySelector(".change-left-btn");
const rightbtn = document.querySelector(".change-right-btn");

leftbtn.addEventListener('click' , function (event){
    console.log('done');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event,preventDefault();

})

rightbtn.addEventListener('click', 
    function (event){
    console.log('done');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft += 1100;
    event,preventDefault();
});

const leftbtnl = document.querySelector(".btn-l");
const rightbtnr = document.querySelector(".btn-r");

leftbtnl.addEventListener('click' , function (event){
    console.log('done');
    const conent = document.querySelector('.ps-1');
    conent.scrollLeft -= 1100;
    event,preventDefault();

})

rightbtnr.addEventListener('click', 
    function (event){
    console.log('done');
    const conent = document.querySelector('.ps-1');
    conent.scrollLeft += 1100;
    event,preventDefault();
});

const leftbtnla = document.querySelector(".btn-la");
const rightbtnra = document.querySelector(".btn-ra");

leftbtnla.addEventListener('click' , function (event){
    console.log('done');
    const conent = document.querySelector('.ps-1a');
    conent.scrollLeft -= 1100;
    event,preventDefault();

})

rightbtnra.addEventListener('click', 
    function (event){
    console.log('done');
    const conent = document.querySelector('.ps-1a');
    conent.scrollLeft += 1100;
    event,preventDefault();
});

const leftbtnlab = document.querySelector(".btn-lab");
const rightbtnrab = document.querySelector(".btn-rab");

leftbtnlab.addEventListener('click' , function (event){
    console.log('done');
    const conent = document.querySelector('.ps-1ab');
    conent.scrollLeft -= 1100;
    event,preventDefault();

})

rightbtnrab.addEventListener('click', 
    function (event){
    console.log('done');
    const conent = document.querySelector('.ps-1ab');
    conent.scrollLeft += 1100;
    event,preventDefault();
});

// slide buttons function end