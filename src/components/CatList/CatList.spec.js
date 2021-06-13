import React from 'react';
import { mockFormattedCats } from '../../mockData';
import { cleanup, render, fireEvent } from '../../utils/test-utils';
import { CatList } from './CatList';

const renderComponent = (initialState = {}) => {
  const utils = render(<CatList />, { initialState });
  const component = utils.queryByTestId('cat-list');

  return { ...utils, component };
};

describe('CatCard', () => {
  beforeEach(() => {
    cleanup();
  });

  test('Component does not render when no props are passed', () => {
    const { component } = renderComponent();
    expect(component).not.toBeInTheDocument();
  });

  test('Renders when cats are in state', () => {
    const { component } = renderComponent({
      cats: { data: mockFormattedCats }
    });
    expect(component).toBeInTheDocument();
  });

  test('Navigates to page 2 of the cat list', () => {
    const { getByLabelText } = renderComponent({
      cats: { data: mockFormattedCats }
    });
    const page2Button = getByLabelText('Go to page 2');
    fireEvent.click(page2Button);
    expect(page2Button).toHaveAttribute('aria-current', 'true');
  });
});
