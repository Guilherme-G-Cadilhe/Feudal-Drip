import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner.component'
import * as S from './category.styles.jsx';

// Redux
import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector'

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <S.ContainerShadow>
      <S.CategoryTitleContainer>
        <S.CategoryTitle>{category.toUpperCase()}</S.CategoryTitle>
      </S.CategoryTitleContainer>
      {
        isLoading ?
          <Spinner /> :
          <S.CategoryContainer>
            {
              products && products.map(product => <S.CardShadow key={product.id}><ProductCard key={product.id} product={product} /></S.CardShadow>)
            }
          </S.CategoryContainer>
      }

    </S.ContainerShadow>
  )

}
export default Category