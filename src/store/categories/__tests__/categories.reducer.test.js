import { categoriesReducer, CATEGORIES_INITIAL_STATE } from "../categories.reducer";
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed
} from '../categories.action'


describe('Categories', () => {

  it('should validate fetchCategoriesStart', () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true
    }
    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())).toEqual(expectedState)
  })

  it('should validate fetchCategoriesSuccess', () => {
    const mockData = [
      {
        title: 'mens',
        imageUrl: 'test',
        items: [
          { id: 1, 'name': 'product a' },
          { id: 2, 'name': 'product b' }
        ]
      },
      {
        title: 'womens',
        imageUrl: 'test2',
        items: [
          { id: 3, 'name': 'product c' },
          { id: 4, 'name': 'product d' }
        ]
      }
    ]
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData
    }
    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesSuccess(mockData))).toEqual(expectedState)
  })

  it('should validate fetchCategoriesFailed', () => {
    const mockError = new Error('error fetching categories')
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError
    }
    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesFailed(mockError))).toEqual(expectedState)
  })


})