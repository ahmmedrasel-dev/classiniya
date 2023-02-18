import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const ToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick() {
    setTheme({
      mode: theme.mode === 'light' ? 'dark' : 'light',
    });
  }
  return (
    <button
      className="bg-accent text-white font-bold py-2 px-4 rounded fixed right-0 top-2/4 z-50"
      onClick={handleClick}
    >
      Toggle Mode
    </button>
  );
};

export default ToggleButton;