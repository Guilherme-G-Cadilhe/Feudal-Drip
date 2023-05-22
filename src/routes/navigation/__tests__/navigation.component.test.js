import { screen, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";
// import testDispatchMock from "../mockDispatch";

import Navigation from "../navigation.component";
import { renderWithProviders } from "../../../utils/tests/test.utils";
import * as userAction from "../../../store/user/user.action";


jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));


describe('Navigation Tests', () => {

  const useDispatchMock = reactRedux.useDispatch;
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => { });
  })
  afterEach(() => {
    useDispatchMock.mockClear();
  })

  it('should render a Sign in link if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      }
    })

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
  })

  it('should render a Sign out link if there is a object but no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    })

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();
  })

  it('should not render cart dropdown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: []
        }
      }
    })

    const dropdownText = screen.queryByText(/your cart is empty/i);
    expect(dropdownText).toBeNull();
  })



  it('should render cart dropdown if isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: []
        }
      }
    })
    const dropdownText = screen.getByText(/your cart is empty/i);
    expect(dropdownText).toBeInTheDocument();
  })

  it('should not display cart is empty if isCartOpen is true and have items', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [{
            id: 1,
            name: 'Item A',
            imageUrl: "test",
            price: 10,
            quantity: 1
          }]
        }
      }
    })
    const dropdownText = screen.queryByText(/your cart is empty/i);
    expect(dropdownText).toBeNull();
  })

  test('it should dispatch signOutStart action when clicking on the Sign Out Link', async () => {
    // const mockDispatch = jest.fn();
    // jest.spyOn(testDispatchMock, 'useDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    })

    const signOutLinkElement = screen.getByText(/sign out/i);
    //Spy signOutStart
    const signOutStartAction = jest.spyOn(userAction, 'signOutStart');
    expect(signOutLinkElement).toBeInTheDocument();

    await fireEvent.click(signOutLinkElement);

    expect(useDispatchMock).toHaveBeenCalled();
    expect(signOutStartAction).toHaveBeenCalled();


  })


})