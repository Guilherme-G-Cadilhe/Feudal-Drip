import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/tests/test.utils";
import CartIcon from "../cart-icon.component";

describe('Cart Icons Test', () => {

  it('uses preloaded state to render', () => {
    const initialCartItems = [
      {
        id: 1,
        name: 'Item A',
        imageUrl: "test",
        price: 10,
        quantity: 1
      },
      {
        id: 2,
        name: 'Item B',
        imageUrl: "test2",
        price: 10,
        quantity: 2
      }
    ]

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems
        }
      }
    })

    const cartIconelement = screen.getByText('3');
    expect(cartIconelement).toBeInTheDocument();

  })

});