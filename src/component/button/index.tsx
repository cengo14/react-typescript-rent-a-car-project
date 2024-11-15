import React from "react";

interface Props {
  title: string;
  type?: "button" | "submit";
  disabled?: boolean;
  designs?: string;
  icon?: string;
  handleClick?: () => void;
  ariaLabel: string;
}
const Button = ({
  title,
  type,
  designs,
  disabled,
  icon,
  handleClick,
  ariaLabel,
}: Props) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={handleClick}
      disabled={disabled}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 transition ${designs}`}
      type={type}
    >
      <span className="flex-1">{title}</span>
      {icon && <img src={icon} alt="sağ yön oku iconu" className="size-6" />}
    </button>
  );
};

export default Button;
