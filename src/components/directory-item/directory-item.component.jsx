import { useNavigate } from 'react-router-dom'

import * as S from './directory-item.styles.jsx'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category

  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <S.DirectoryItemContainer onClick={onNavigateHandler}>
      <S.BackgroundImage
        imageUrl={imageUrl}
      />
      <S.Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </S.Body>
    </S.DirectoryItemContainer>
  )
}

export default DirectoryItem