import * as S from "./button.styles";
import { FC, ButtonHTMLAttributes } from "react";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof S.BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: S.BaseButton,
    [BUTTON_TYPE_CLASSES.google]: S.GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: S.InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <S.ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
