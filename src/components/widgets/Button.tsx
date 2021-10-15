import { colors } from "../../utils";

interface ButtonProps {
  label: string;
  inverse?: boolean;
}

const Button = ({ label, inverse }: ButtonProps) => {
  return (
    <a
      href="www.google.com"
      style={{
        boxSizing: "border-box",
        padding: "10px 20px",
        background: inverse ? "transparent" : colors.primaryColor,
        color: inverse ? colors.black : "#ffffff",
        display: "inline-block",
        borderRadius: "20px",
        boxShadow: inverse ? "none" : "#e30b5d 0px 0px 10px 0px",
        border: "1px solid",
        borderColor: inverse ? colors.primaryColor : "transparent",
        fontSize: 14,
        letterSpacing: "1px",
      }}
    >
      {label}
    </a>
  );
};

export default Button;
