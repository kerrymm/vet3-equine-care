/**
 * Vet3 Equine Care - Main JavaScript
 * Fully functional vanilla JavaScript with cross-browser support
 */

(function() {
  'use strict';

  // ========================================
  // MOBILE NAVIGATION
  // ========================================
  
  function initMobileNav() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMobile = document.querySelector('.navbar-mobile');
    const navbarLinks = document.querySelectorAll('.navbar-mobile .navbar-link');
    
    if (navbarToggle && navbarMobile) {
      navbarToggle.addEventListener('click', function() {
        navbarMobile.classList.toggle('active');
        
        // Toggle icon between menu and X
        const icon = navbarToggle.querySelector('svg');
        if (icon) {
          const isOpen = navbarMobile.classList.contains('active');
          icon.innerHTML = isOpen ? 
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />' :
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        }
      });
      
      // Close mobile menu when a link is clicked
      navbarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          navbarMobile.classList.remove('active');
        });
      });
    }
  }

  // ========================================
  // ACCORDION
  // ========================================
  
  function initAccordion() {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    
    accordionTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const item = this.closest('.accordion-item');
        const isActive = item.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(function(accordionItem) {
          accordionItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // ========================================
  // FORM HANDLING
  // ========================================
  
  function initForms() {
    const forms = document.querySelectorAll('form[data-form]');
    
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        submitButton.classList.add('loading');
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(function() {
          // Show success message
          showNotification('success', getSuccessMessage(form.dataset.form));
          
          // Reset form
          form.reset();
          
          // Re-enable button
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          submitButton.classList.remove('loading');
        }, 1500);
      });
    });
  }
  
  function getSuccessMessage(formType) {
    const messages = {
      'register': 'Registration Received! Thank you for registering. We\'ll be in touch shortly to confirm your details.',
      'contact': 'Message Sent! Thank you for your enquiry. We\'ll get back to you as soon as possible.',
      'zone': 'Zone Enquiry Received! Thank you for your enquiry. We\'ll contact you with zone visit information.'
    };
    
    return messages[formType] || 'Form submitted successfully!';
  }

  // ========================================
  // NOTIFICATIONS / TOASTS
  // ========================================
  
  function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = 'notification notification-' + type;
    notification.innerHTML = `
      <div class="notification-content">
        <strong>${type === 'success' ? 'Success!' : 'Notice'}</strong>
        <p>${message}</p>
      </div>
      <button class="notification-close" aria-label="Close">&times;</button>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
      const style = document.createElement('style');
      style.id = 'notification-styles';
      style.textContent = `
        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          max-width: 400px;
          background: white;
          border: 1px solid #DEE8ED;
          border-radius: 12px;
          padding: 1rem 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          animation: slideIn 0.3s ease-out;
        }
        
        .notification-success {
          border-left: 4px solid #6BC5E8;
        }
        
        .notification-content strong {
          display: block;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: #26283E;
        }
        
        .notification-content p {
          margin: 0;
          font-size: 0.875rem;
          color: #6B7280;
        }
        
        .notification-close {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #6B7280;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          line-height: 1;
        }
        
        .notification-close:hover {
          color: #26283E;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
      removeNotification(notification);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(function() {
      removeNotification(notification);
    }, 5000);
  }
  
  function removeNotification(notification) {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(function() {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  // ========================================
  // ACTIVE NAV LINK
  // ========================================
  
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-link');
    
    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      
      if (href === currentPath || 
          (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('index.html')))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // ========================================
  // SMOOTH SCROLL
  // ========================================
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href !== '') {
          e.preventDefault();
          
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  // ========================================
  // FORM VALIDATION
  // ========================================
  
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-form]');
    
    forms.forEach(function(form) {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      
      inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
          validateField(this);
        });
        
        input.addEventListener('input', function() {
          if (this.classList.contains('error')) {
            validateField(this);
          }
        });
      });
    });
  }
  
  function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';
    
    if (field.required && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (type === 'email' && value && !isValidEmail(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    } else if (type === 'tel' && value && !isValidPhone(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid phone number';
    }
    
    if (!isValid) {
      showFieldError(field, errorMessage);
    } else {
      clearFieldError(field);
    }
    
    return isValid;
  }
  
  function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'field-error';
      field.parentNode.appendChild(errorElement);
      
      // Add error styles if not present
      if (!document.querySelector('#validation-styles')) {
        const style = document.createElement('style');
        style.id = 'validation-styles';
        style.textContent = `
          .form-input.error,
          .form-textarea.error {
            border-color: #DC2626;
          }
          
          .field-error {
            display: block;
            margin-top: 0.25rem;
            font-size: 0.75rem;
            color: #DC2626;
          }
        `;
        document.head.appendChild(style);
      }
    }
    errorElement.textContent = message;
  }
  
  function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function isValidPhone(phone) {
    // Basic phone validation - adjust regex based on your requirements
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }

  // ========================================
  // LAZY LOADING IMAGES
  // ========================================
  
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(function(img) {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      document.querySelectorAll('img[data-src]').forEach(function(img) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }

  // ========================================
  // INITIALIZATION
  // ========================================
  
  function init() {
    initMobileNav();
    initAccordion();
    initForms();
    setActiveNavLink();
    initSmoothScroll();
    initFormValidation();
    initLazyLoading();
    
    console.log('Vet3 Equine Care - Website initialized');
  }
  
  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ========================================
  // UTILITY FUNCTIONS (Global)
  // ========================================
  
  // Expose some utilities globally if needed
  window.Vet3 = {
    showNotification: showNotification
  };

})();
