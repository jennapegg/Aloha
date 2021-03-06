$(document).ready(function () {
  // Select all links with hashes
  // Fix "Skip Link" Focus in Webkit
  $(function () {
    $("a[href^='#']")
      .not("a[href='#']")
      .click(function () {
        $(
          '#' +
          $(this)
            .attr('href')
            .slice(1) +
          ''
        ).focus();
      });
  });
  //SMOOTH SCROLL FROM CSS TRICKS
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    }); //END OF SMOOTH SCROLL

  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: true
  });

  $('#email').on('submit', function (event) {
    event.preventDefault();
    if ($("input[type='email']").val() == '') {
      alert('Please submit a valid email address.');
    } else {
      alert('Thanks for subscribing!');
    }
  }); //END OF SUBMIT FORM
}); //END OF DOC READY
