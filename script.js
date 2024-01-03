``


// hide and show filter btns in tablet and mobile view accordion


$('.filterBtn-section').click(function () {
    $('.filter-section').toggle();

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
        $(this).next('.type').toggle()
        $('.type').not($(this).next('.type')).slideUp();
    });
});






// list grid view tab functions
$(document).ready(function () {
    $('.grid').click(function () {
        $('.grid-products').css('display', 'grid');
        $('.product-listing').hide();
        $('.grid').css('color', '#740000')
        $('.list').css('color', '#BABABA')
    })
});

// list page
$(document).ready(function () {
    $('.list').click(function () {
        $('.grid-products').hide();
        $('.product-listing').show();
        $('.list').css('color', '#740000');
        $('.grid').css('color', '#BABABA')

    })
})


// like btn fill

$('.heart').each(function () {
    $(this).click(function () {
        $(this).toggleClass('filled')
    })
})



// read more less functions
$('.readMore').click(function () {
    $('.moreText').toggle();
    if ($('.readMore').text() == "Read More") {
        $(this).text("Read less");
    } else {
        $(this).text("Read More");
    }
});


// learnmore functions

$(document).ready(function () {
    $('.learnMore').click(function (e) {
        e.stopPropagation();

        let $prevElement = $(this).prev('.learnText');

        if ($(this).text() === "Learn More") {
            $('.learnText').not($prevElement).slideUp();
            $prevElement.slideToggle();
            $(this).text("Learn Less");

        } else {
            $prevElement.slideUp();
            $(this).text("Learn More");
        }
    });

    // // Clicking anywhere on the document will close all elements
    $(document).click(function () {
        $('.learnText').slideUp();
        $('.learnMore').text("Learn More");
    });

    // // Prevent clicking on .learnText from triggering the document click handler
    $('.learnText').click(function (e) {
        e.stopPropagation();
    });
});









// footer collapse function




$(document).ready(function () {
    $(".first-title").click(function () {
        let $footerLists = $(this).siblings(".footer-lists");
        let $addIcon = $(this).children(".add");

        // Toggle visibility of footer lists
        $footerLists.slideToggle();

        // Toggle add/remove icon
        if ($addIcon.text().trim() === "add") {
            $addIcon.text("remove");
        } else {
            $addIcon.text("add");
        }

        // Close other open footer lists
        $(".footer-lists").not($footerLists).slideUp();
        $(".add").not($addIcon).text("add");
    });
});


























