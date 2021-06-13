import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from '../reducers';

/* Redux store and router testing render fuction */
const render = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {},
  { route = '/' } = {}
) => {
  window.history.pushState({}, 'Test page', route);

  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
