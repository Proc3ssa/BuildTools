import './styles/main.scss';

function setInitialTheme() {
  // Set default theme to light
  document.body.classList.add('theme-light');
}

function toggleTheme() {
  if (document.body.classList.contains('theme-dark')) {
    document.body.classList.replace('theme-dark', 'theme-light');
  } else {
    document.body.classList.replace('theme-light', 'theme-dark');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setInitialTheme();
  const btn = document.getElementById('theme-toggle');
  btn?.addEventListener('click', toggleTheme);
});
