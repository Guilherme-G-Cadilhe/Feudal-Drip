import { createSelector } from "reselect";

import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";

const selectCategoryReducer = (state: any): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category): CategoryMap => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

// (state) => state.categories.categories.reduce((acc, category) => {
//   const { title, items } = category;
//   acc[title.toLowerCase()] = items;
//   return acc;
// }, {});
