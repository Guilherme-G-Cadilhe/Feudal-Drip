import { selectCategories, selectCategoriesIsLoading, selectCategoriesMap } from "../categories.selector";

const mockState = {
  categories: {
    isLoading: false,
    categories: [
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
  }
}


describe('Categories selector', () => {

  test('selectCategories should return the categoriesData', () => {
    const categoriesSlice = selectCategories(mockState);

    expect(categoriesSlice).toEqual(mockState.categories.categories)
  })

  test('selectCategoriesIsLoading should return isLoading state', () => {
    const isLoading = selectCategoriesIsLoading(mockState);
    expect(isLoading).toEqual(false)
  })

  test('selectCategoriesMap should convert the items array into the appropriate map', () => {
    const expectedCategoriesMap = {
      mens: [
        { id: 1, 'name': 'product a' },
        { id: 2, 'name': 'product b' }
      ],
      womens: [
        { id: 3, 'name': 'product c' },
        { id: 4, 'name': 'product d' }
      ]
    }
    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap)
  })
})
