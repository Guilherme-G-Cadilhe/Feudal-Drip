import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/tests/test.utils";

import Category from "../category.component";

const windowMock = {
  scrollTo: jest.fn(),
};

Object.assign(global, global, windowMock);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    category: 'mens'
  })
}))

describe('Category tests', () => {

  it('should render a spinner if isLoading is true', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: []
        }
      }
    });

    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
  })

  it("should render product and no spinner if isLoading is false", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: 'mens',
              items: [{
                id: 1, name: 'Product A'
              },
              {
                id: 2, name: 'Product B'
              }
              ]
            }
          ]
        }
      }
    });

    const spinnerElement = screen.queryByTestId('spinner');
    expect(spinnerElement).toBeNull();

    const productAElement = screen.getByText(/product a/i);
    expect(productAElement).toBeInTheDocument();

  })



})