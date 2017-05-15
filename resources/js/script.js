function goToPage(thePage){
  var theCurrentPage = document.getElementById("currentSectionNavLink");
  theCurrentPage.setAttribute('id','');
  thePage.setAttribute('id','currentSectionNavLink');
  $('html, body').animate({
      scrollTop: $("#" + thePage.innerHTML + '-section').offset().top - $(window).height() * 0.15
  }, 500);
  document.getElementById('theTitle').innerHTML = "Neon Labs | " + thePage.innerHTML;
}
