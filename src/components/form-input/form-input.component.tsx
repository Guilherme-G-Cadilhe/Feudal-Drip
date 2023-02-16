import * as S from "./form-input.styles";
import { InputHTMLAttributes, FC } from "react";

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <S.Group>
      <S.FormInput {...otherProps} />
      {label && (
        <S.FormInputLabel
          shrink={Boolean(otherProps.value && typeof otherProps.value === "string" && otherProps.value.length)}
        >
          {label}
        </S.FormInputLabel>
      )}
    </S.Group>
  );
};

export default FormInput;
