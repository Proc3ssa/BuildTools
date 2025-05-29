import './styles/main.scss';
import prayers from './prayers.json';

type Prayer = {
  prayer: string;
  time: string;
};

export function setInitialTheme() {
  // Always start with light theme
  document.body.classList.add('theme-light');
}

export function toggleTheme() {
  if (document.body.classList.contains('theme-dark')) {
    document.body.classList.replace('theme-dark', 'theme-light');
  } else {
    document.body.classList.replace('theme-light', 'theme-dark');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setInitialTheme();
  const checkbox = document.getElementById('theme-toggle-checkbox') as HTMLInputElement;
  checkbox?.addEventListener('change', toggleTheme);
});

const clockElement = document.getElementById('clock');
let render = ``;

prayers.forEach((prayer: Prayer) => {

  render += `
     <div class="clock">
         <p id="fajr-time">${prayer.prayer}</p>
        <h2>${prayer.time}</h2>
      </div>
  `;
});

if (clockElement) {
  clockElement.innerHTML = render;
}