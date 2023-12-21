


// hide and show filter btns in tablet and mobile view accordion


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



// filter option accordion
$(document).ready(function () {
    $('.filter-option').click(function () {
        $(this).next('.type').toggle(500)
        $('.type').not($(this).next('.type')).slideUp();
    });
});






// list grid view tab functions
$(document).ready(function () {
    $('.grid').click(function () {
        $('.grid-products').css('display', 'grid');
        $('.product-listing').hide(1000);
        $('.grid').css('color', '#740000')
        $('.list').css('color', '#BABABA')
    })
});

// list page
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
























