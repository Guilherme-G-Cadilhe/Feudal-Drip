import { useEffect } from 'react'
import ProductCard from '../product-card/product-card.component';

import * as S from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <S.CategoryPreviewContainer>
      <S.CategoryHeading>
        <S.CategoryTitleContainer>
          <S.CategoryTitle to={title}>{title.toUpperCase()} &#8594;</S.CategoryTitle>
        </S.CategoryTitleContainer>
      </S.CategoryHeading>
      <S.PreviewItems>
        {
          products
            .filter((_, index) => index < 4)
            .map((product) => (<ProductCard key={product.id} product={product} />))
        }
      </S.PreviewItems>
    </S.CategoryPreviewContainer>
  )

}

export default CategoryPreview;