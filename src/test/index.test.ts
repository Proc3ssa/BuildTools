
import { setInitialTheme, toggleTheme } from '../index';

describe('Theme functions', () => {
  beforeEach(() => {
    document.body.classList.remove('theme-light');
    document.body.classList.remove('theme-dark');
    document.body.classList.add = jest.fn();
    document.body.classList.remove = jest.fn();
    document.body.classList.replace = jest.fn();
  });

  it('setInitialTheme should add theme-light class to the body', () => {
    setInitialTheme();
    expect(document.body.classList.add).toHaveBeenCalledWith('theme-light');
  });

  it('toggleTheme should toggle between theme-light and theme-dark', () => {
    // Start with theme-light
    document.body.classList.contains = jest.fn().mockReturnValue(false);
    toggleTheme();
    expect(document.body.classList.replace).toHaveBeenCalledWith('theme-light', 'theme-dark');

    // Switch to theme-dark
    document.body.classList.contains = jest.fn().mockReturnValue(true);
    toggleTheme();
    expect(document.body.classList.replace).toHaveBeenCalledWith('theme-dark', 'theme-light');
  });
});