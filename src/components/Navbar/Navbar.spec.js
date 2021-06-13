import React from 'react';
import { Navbar } from './Navbar';
import { render, cleanup } from '../../utils/test-utils';

const renderComponent = () => {
  const utils = render(<Navbar />, {
    initialState: {}
  });
  const component = utils.queryByTestId('navbar');

  return { ...utils, component };
};

describe('Navbar', () => {
  beforeEach(() => {
    cleanup();
  });

  test('Navbar renders succesfully', () => {
    const { component } = renderComponent();
    expect(component).toBeInTheDocument();
  });

  test('Navbar title renders succesfully', () => {
    const { getByText } = renderComponent();
    expect(getByText('The Cat App')).toBeInTheDocument();
  });

  test('Navbar Home link renders succesfully', () => {
    const { getByText } = renderComponent();
    expect(getByText('Home')).toBeInTheDocument();
  });

  test('Navbar Upload link renders succesfully', () => {
    const { getByText } = renderComponent();
    expect(getByText('Upload')).toBeInTheDocument();
  });
});
