import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import { LoadingSpinner } from './LoadingSpinner';

const renderComponent = props => {
  const utils = render(<LoadingSpinner {...props} />, { initialState: {} });
  const component = utils.queryByTestId('loading-spinner');

  return { ...utils, component };
};

describe('LoadingSpinner', () => {
  beforeEach(() => {
    cleanup();
  });

  test('Renders when no props are passed', () => {
    const { component } = renderComponent();
    expect(component).toBeInTheDocument();
  });

  test('Renders component when error prop is passed', () => {
    const { getByText } = renderComponent({ text: 'Loading test text' });
    expect(getByText('Loading test text')).toBeInTheDocument();
  });
});
