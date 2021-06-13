import React from 'react';
import { cleanup, fireEvent, render } from '../../utils/test-utils';
import { AlertBar } from './AlertBar';

const renderComponent = props => {
  const utils = render(<AlertBar {...props} />, { initialState: {} });
  const component = utils.queryByTestId('alert-bar');

  return { ...utils, component };
};

describe('AlertBar', () => {
  beforeEach(() => {
    cleanup();
  });

  test('Component is not visible when closed', () => {
    const { component } = renderComponent();
    expect(component).not.toBeInTheDocument();
  });

  test('Renders when message prop passed', () => {
    const { component } = renderComponent({
      message: 'Update has been successful'
    });
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent('Success: Update has been successful');
  });

  test('Renders severity correctly when prop passed', () => {
    const { component } = renderComponent({
      message: 'Update has failed',
      severity: 'error'
    });
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent('Error: Update has failed');
  });

  test('Fires handleClose when close button clicked', () => {
    const { component, getByLabelText } = renderComponent({
      message: 'Update has been successful'
    });
    const closeButton = getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(component).toBeInTheDocument();
  });
});
