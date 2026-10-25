/* ====== Eterna — App JavaScript ====== */
/* Dropdown handled by inline script in index.html */

// Contact form
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('contactMsg');
    if (msg) msg.textContent = 'Thank you! Your message has been sent. (Demo)';
    contactForm.reset();
  });
}

// Newsletter form
var newsForm = document.getElementById('newsletterForm');
if (newsForm) {
  newsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('newsletterMsg');
    if (msg) msg.textContent = 'Thank you for subscribing! (Demo)';
    newsForm.reset();
  });
}

// Clients slider
var track = document.querySelector('.clients-track');
var slides = document.querySelectorAll('.clients-slide');
var dotsBox = document.getElementById('clientsDots');

if (track && slides.length > 0 && dotsBox) {
  var currentSlide = 0;
  var totalSlides = slides.length;

  for (var i = 0; i < totalSlides; i++) {
    var dot = document.createElement('button');
    dot.setAttribute('data-index', String(i));
    if (i === 0) dot.className = 'active';
    dotsBox.appendChild(dot);
  }

  function goToSlide(n) {
    currentSlide = n % totalSlides;
    track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    var allDots = dotsBox.querySelectorAll('button');
    for (var j = 0; j < allDots.length; j++) {
      allDots[j].className = (j === currentSlide) ? 'active' : '';
    }
  }

  dotsBox.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      goToSlide(parseInt(e.target.getAttribute('data-index')));
    }
  });

  setInterval(function () { goToSlide(currentSlide + 1); }, 4000);
}

// Blog filters (for blog.html)
var catFilter = document.querySelector('#category-filter');
var searchBox = document.querySelector('#blog-search');
var posts = document.querySelectorAll('.blog-card');
var noPosts = document.querySelector('#no-posts');

function filterBlog() {
  var cat = catFilter ? catFilter.value : 'all';
  var txt = searchBox ? searchBox.value.toLowerCase().trim() : '';
  var count = 0;
  for (var i = 0; i < posts.length; i++) {
    var okCat = (cat === 'all' || posts[i].dataset.category === cat);
    var okTxt = posts[i].textContent.toLowerCase().indexOf(txt) !== -1;
    posts[i].hidden = !(okCat && okTxt);
    if (!posts[i].hidden) count++;
  }
  if (noPosts) noPosts.hidden = count > 0;
}

if (catFilter) catFilter.addEventListener('change', filterBlog);
if (searchBox) searchBox.addEventListener('input', filterBlog);
