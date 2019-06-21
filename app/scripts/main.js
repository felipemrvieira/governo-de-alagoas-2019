console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

/*active button class onclick*/
$('nav a').click(function(e) {
  e.preventDefault();
  $('nav a').removeClass('active');
  $(this).addClass('active');
  if(this.id === !'cidadao'){
    $('.cidadao').addClass('noshow');
  }
  else if(this.id === 'cidadao') {
    $('.cidadao').removeClass('noshow');
    $('.rightbox').children().not('.cidadao').addClass('noshow');
  }
  else if (this.id === 'servidor') {
    $('.servidor').removeClass('noshow');
      $('.rightbox').children().not('.servidor').addClass('noshow');
  }
  else if(this.id === 'contribuinte') {
    $('.contribuinte').removeClass('noshow');
    $('.rightbox').children().not('.contribuinte').addClass('noshow');
  }
  else if(this.id === 'diario') {
    $('.diario').removeClass('noshow');
    $('.rightbox').children().not('.diario').addClass('noshow');
  }
});