document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const enhanceNavigation = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });
};

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrolled >= sectionTop - 600) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
      }
  });
});

AOS.init({
  duration: 1000,
  once: true
});

const createScrollProgress = () => {
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);

  window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollProgress.style.width = `${scrolled}%`;
  });
};

document.querySelectorAll('.interactive-card').forEach(card => {
  card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
      const imgSrc = item.querySelector('img').src;
      lightboxImg.src = imgSrc;
      lightbox.style.display = 'block';
  });
});

document.querySelector('.lightbox .close').addEventListener('click', () => {
  lightbox.style.display = 'none';
});

document.getElementById('guestbook-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      rating: document.querySelector('input[name="rating"]:checked')?.value
  };
  console.log('Form submitted:', formData);
  alert('Thank you for your message!');
  e.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  createScrollProgress();
  enhanceNavigation();
});