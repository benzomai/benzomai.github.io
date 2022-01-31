// init Isotope
var $container = $('#container').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: 55
    }
});

// filter with selects and checkboxes
var $checkboxes = $('.portfolio--nav input');

$checkboxes.change( function() {
    // map input values to an array
    var inclusives = [];

    // inclusive filters from checkboxes
    $checkboxes.each( function( i, elem ) {
        // if checkbox, use value if checked
        if ( elem.checked ) {
        inclusives.push( elem.value );
        }
    });

    // combine inclusive filters
    var filterValue = inclusives.length ? inclusives.join(', ') : '*';

    $container.isotope({ filter: filterValue })
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });  

//contact form jquery
$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });
