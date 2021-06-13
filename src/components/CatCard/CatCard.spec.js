import React from 'react';
import { mockFormattedCats } from '../../mockData';
import { cleanup, render } from '../../utils/test-utils';
import { CatCard } from './CatCard';

const renderComponent = props => {
  const utils = render(<CatCard {...props} />, { initialState: {} });
  const component = utils.queryByTestId('cat');

  return { ...utils, component };
};

describe('CatCard', () => {
  const cat = mockFormattedCats[0];
  beforeEach(() => {
    cleanup();
  });

  test('Renders when no props are passed', () => {
    const { component } = renderComponent();
    expect(component).toBeInTheDocument();
  });

  test('Renders with cat prop passed', () => {
    const { component } = renderComponent({ cat });
    expect(component).toBeInTheDocument();
  });

  test('Displays correct cat score', () => {
    const { getByText } = renderComponent({ cat });
    expect(getByText('Score: 0')).toBeInTheDocument();
  });
});
