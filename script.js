window.addEventListener('scroll', function() {
    var scrollIndicator = document.getElementById('scroll-indicator');
    if (window.scrollY > 100) { // Change '100' to the desired scroll position
      scrollIndicator.classList.add('active');
    } else {
      scrollIndicator.classList.remove('active');
    }
  });
  