import React from "react";
import "./ChangeThemeButton.scss";
import useTheme from "../../hooks/useTheme";

function ChangeThemeButton() {
  const { type, setType } = useTheme(true);

  return (
    <div className="theme-button">
      <button onClick={() => setType(!type)} type="button">
        <span>Change theme</span>
      </button>
    </div>
  );
}

export default ChangeThemeButton;
