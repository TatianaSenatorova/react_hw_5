import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/actions";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      Текущая тема: {theme}
      <button
        className="theme-button"
        onClick={() => dispatch(toggleTheme())}
      >
        Переключить тему
      </button>
    </div>
  );
};

export default ThemeSwitcher;