let filterCategory = document.querySelectorAll(".filter-category");
let openType = document.querySelector(".type");
let typeTitle = document.querySelector(".typeTitle");
let expand = document.querySelector(".expand");



for (let i = 0; i < filterCategory.length; i++) {
    // console.log(filterCategory[i])
    filterCategory[i].addEventListener("click", () => {
        openType.classList.toggle("open");
        // filterCategory[i].style.background="white";
        // typeTitle.style.color="#740000";
        // expand.style.color="#740000"
    })

}



// // list grid open functions
// let listIcon = document.querySelector(".list");
// let list = document.querySelector(".product-listing");
// let gridIcon = document.querySelector(".grid");
// let grid = document.querySelector(".grid-products");

// listIcon.addEventListener("click", () => {
//     list.style.display = "block";
//     grid.style.display = "none";
//     gridIcon.style.color = "#BABABA";
//     listIcon.style.color = "#740000";
// })

// gridIcon.addEventListener("click", () => {
//     grid.style.display = "grid";
//     list.style.display = "none";
//     gridIcon.style.color = "#740000";
//     listIcon.style.color = "#BABABA";
// })



$(document).ready(function () {
    $('.grid').click(function () {
        $('.grid-products').css('display', 'grid');
        $('.product-listing').hide(1000);
        $('.grid').css('color', '#740000')
        $('.list').css('color', '#BABABA')
    })
});



$(document).ready(function () {
    $('.list').click(function () {
        $('.grid-products').hide(1000);
        $('.product-listing').show(1000);
        $('.list').css('color', '#740000');
        $('.grid').css('color', '#BABABA')

    })
})

// read more less functions
$('.readMore').click(function () {
    $('.moreText').toggle(1000);
    if ($('.readMore').text() == "Read More") {
        $(this).text("Read less");
    } else {
        $(this).text("Read More");
    }
});


// learnmore functions

$('.learnMore').click(function () {
    $('.learnText').toggle(1000);
    if ($('.learnMore').text() == "Learn More") {
        $(this).text("Learn Less");
    }
    else {
        $(this).text("Learn More");
    }

})


























// filter btn open
// let filterBtn = document.querySelector(".filterBtn-section");
// let filterContents = document.querySelector(".filter-section");


// filterBtn.addEventListener("click", () => {
//     filterContents.classList.toggle("filterOpen")



//     // add filter name and icon changing
//     let textContent = document.querySelector('.show-filter');
//     let addIcon = document.querySelector('.material-symbols-outlined');

//     if (textContent.innerText == "SHOW FILTERS") {
//         textContent.innerText = "HIDE FILTER";
//         addIcon.innerText = "remove";
//     }
//     else {
//         textContent.innerText = "SHOW FILTERS";
//         addIcon.innerText = "add";
//     }
// })



$('.filterBtn-section').click(function () {
    $('.filter-section').toggle(1200);

    if ($('.show-filter').text() == "SHOW FILTERS") {
        $('.show-filter').text("HIDE FILTER");
        $('.addIcon').text("remove");
    }
    else {
        $('.show-filter').text("SHOW FILTERS");
        $('.addIcon').text("add")
    }

})