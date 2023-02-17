import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { CategoryItem } from "../directory/directory.component";
import * as S from "./directory-item.styles";

export type DirectoryItemProps = {
  category: CategoryItem;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <S.DirectoryItemContainer onClick={onNavigateHandler}>
      <S.BackgroundImage imageUrl={imageUrl} />
      <S.Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </S.Body>
    </S.DirectoryItemContainer>
  );
};

export default DirectoryItem;
