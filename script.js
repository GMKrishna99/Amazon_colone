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

// slide buttons function end