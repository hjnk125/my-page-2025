import { useEffect, useState } from 'react';
import Toggle from '@components/atoms/Toggle';
import LightIcon from '@icons/light.svg?react';
import DarkIcon from '@icons/dark.svg?react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Toggle
      value={isDarkMode}
      onClick={() => setIsDarkMode((prev) => !prev)}
      icon={isDarkMode ? <DarkIcon /> : <LightIcon />}
    />
  );
};

export default ThemeToggle;
