/**
 * Queijo Coalho Recheado - Landing Page Interactivity
 * Vanilla JavaScript (Zero Dependencies, Ultra Fast)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordion items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
      
      // Toggle current
      item.classList.toggle('active', !isActive);
    });
  });

  // 2. Smooth Scroll to Checkout
  const ctaButtons = document.querySelectorAll('a[href^="#"]');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 3. Subtle Interactive Polish (Hover tilt / Card dynamics)
  console.log('Queijo Coalho Recheado: Landing page inicializada com sucesso.');
});
