import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

// ======= Setting Categories =======
import { useDispatch } from 'react-redux'
import { fetchCategoriesStart } from '../../store/categories/categories.action'

//import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
//import SHOP_DATA from '../../shop-data.js';

const Shop = () => {
  const dispatch = useDispatch()

  // ======== CATEGORIES ========
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);



  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>

  );
}

export default Shop