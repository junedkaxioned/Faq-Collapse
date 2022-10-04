var toggleBtn = document.querySelectorAll('.faq-btn');

// function for Adding Event on each btn
toggleBtn.forEach(function (toggel) {
  toggel.addEventListener('click', function () {
    toggel.parentNode.classList.toggle('active');
  })
})