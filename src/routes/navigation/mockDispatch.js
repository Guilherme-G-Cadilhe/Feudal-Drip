import * as reactRedux from "react-redux";

const testDispatchMock = {
  // 👇 Re-export function that you want to mock
  useDispatch: reactRedux.useDispatch,
};

export default testDispatchMock;