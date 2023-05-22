import { screen, fireEvent } from "@testing-library/react";

import ProductCard from "../product-card.component";
import { renderWithProviders } from "../../../utils/tests/test.utils";

describe('Product Cards Tests', () => {
  it('should add the product item when Product Card button is clicked', async () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'test',
      name: "item A",
      price: 10
    };
    const { store } = renderWithProviders(<ProductCard product={mockProduct} />, {
      preloadedState: {
        cart: {
          cartItems: []
        }
      }
    });

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);
    expect(store.getState().cart.cartItems.length).toBe(1);

  })

})