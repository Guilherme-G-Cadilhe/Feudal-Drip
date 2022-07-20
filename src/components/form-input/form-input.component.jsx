import * as S from './form-input.styles.jsx'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <S.Group>
      <S.FormInput {...otherProps} />
      {label && (
        <S.FormInputLabel shrink={otherProps.value.length}>
          {label}
        </S.FormInputLabel>
      )}

    </S.Group>
  )
}

export default FormInput