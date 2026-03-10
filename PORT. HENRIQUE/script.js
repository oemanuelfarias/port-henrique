document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer minimalista pre-configurado para emular bibliotecas como AOS
  // garantindo performance (0 CLS) e sem as lentidões de libs pesadas no First Contentful Paint.

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        // Para parar de observar após animar uma vez:
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
  });

  // Modal Galeria (Apenas Desktop)
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('gallery-modal-img');
  const closeBtn = document.getElementById('gallery-modal-close');

  if (modal && modalImg && closeBtn) {
    const galleryItems = document.querySelectorAll('.gallery-img');

    galleryItems.forEach(img => {
      img.addEventListener('click', function () {
        if (window.innerWidth >= 1024) {
          modal.classList.add('show');

          let highResUrl = this.src;
          if (highResUrl.includes('w=400')) {
            highResUrl = highResUrl.replace('w=400', 'w=1200');
          }
          modalImg.src = highResUrl;
          document.body.style.overflow = 'hidden'; // Trava o scroll da página
        }
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }
});
