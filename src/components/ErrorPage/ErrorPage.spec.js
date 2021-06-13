import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import { ErrorPage } from './ErrorPage';

const renderComponent = props => {
  const utils = render(<ErrorPage {...props} />, { initialState: {} });
  const component = utils.queryByTestId('error-page');

  return { ...utils, component };
};

describe('ErrorPage', () => {
  const mockError = {
    data: { message: '404 - There has been an error' },
    status: 404
  };
  let error;

  beforeEach(() => {
    error = mockError;
    cleanup();
  });

  test('Does not render when no props are passed', () => {
    const { component } = renderComponent();
    expect(component).not.toBeInTheDocument();
  });

  test('Renders component when error prop is passed', () => {
    const { component } = renderComponent({ error });
    expect(component).toBeInTheDocument();
  });

  test('Renders component when error prop is passed incomplete', () => {
    const { component } = renderComponent({ error: {} });
    expect(component).toBeInTheDocument();
  });

  test('Renders status and message when error prop is passed', () => {
    const { getByText } = renderComponent({ error });
    expect(getByText('404')).toBeInTheDocument();
    expect(
      getByText('Error: 404 - There has been an error')
    ).toBeInTheDocument();
  });
});
