


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


// like btn fill

$('.heart').each(function(){
    $(this).click(function () {
        $(this).toggleClass('filled')
    })
})



// read more less functions
$('.readMore').click(function () {
    $('.moreText').toggle(800);
    if ($('.readMore').text() == "Read More") {
        $(this).text("Read less");
    } else {
        $(this).text("Read More");
    }
});


// learnmore functions

$(document).ready(function() {
    $('.learnMore').click(function(e) {
      e.stopPropagation(); // Stop the event from propagating further
  
      let $prevElement = $(this).prev('.learnText');
  
      if ($(this).text() === "Learn More") {
        $('.learnText').not($prevElement).slideUp(); // Close other elements
        $prevElement.slideToggle(1000); // Toggle the visibility
        $(this).text("Learn Less");
      } else {
        $prevElement.slideUp(); // Hide the previous element
        $(this).text("Learn More");
      }
    });
  
    // // Clicking anywhere on the document will close all elements
    $(document).click(function() {
      $('.learnText').slideUp();
      $('.learnMore').text("Learn More");
    });
  
    // // Prevent clicking on .learnText from triggering the document click handler
    $('.learnText').click(function(e) {
      e.stopPropagation();
    });
  });

  























