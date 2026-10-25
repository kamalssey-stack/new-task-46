/* ====== Mentor — App JavaScript ====== */

// Menu toggle
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('mainNav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
})();

// Contact form
(function () {
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (msg) msg.textContent = 'Thank you! Your message has been sent. (Demo)';
      form.reset();
    });
  }
})();
