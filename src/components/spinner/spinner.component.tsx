import * as S from "./spinner.styles";

const Spinner = () => (
  <S.SpinnerOverlay data-testid="spinner">
    <S.SpinnerContainer />
  </S.SpinnerOverlay>
);

export default Spinner;
