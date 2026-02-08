// ============================================
// THEME TOGGLE FUNCTIONALITY
// ============================================

(function() {
  'use strict';
  
  // Initialize theme on page load
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  
  // Call init immediately to prevent flash
  initTheme();
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggle);
  } else {
    setupThemeToggle();
  }
  
  function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
      console.error('Theme toggle button not found');
      return;
    }
    
    // Update icon based on current theme
    updateThemeIcon();
    
    // Add click event listener
    themeToggle.addEventListener('click', toggleTheme);
    
    console.log('Theme toggle initialized successfully');
  }
  
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
    
    console.log('Theme switched to:', newTheme);
  }
  
  function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
  
})();

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ============================================
// RESUME & CV FUNCTIONS
// ============================================

function viewResume() {
  const resumePath = './Assets/VILLAROSA_GLENNDEL-%20Resume.pdf';
  window.open(resumePath, '_blank');
}

function downloadResume() {
  const resumePath = './Assets/VILLAROSA_GLENNDEL-%20Resume.pdf';
  const link = document.createElement('a');
  link.href = resumePath;
  link.download = 'My_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function viewCV() {
  const cvPath = './Assets/CV.pdf';
  window.open(cvPath, '_blank');
}

function downloadCV() {
  const cvPath = './Assets/CV.pdf';
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'My_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
