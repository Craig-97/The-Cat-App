import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import { UploadFile } from './UploadFile';

const renderComponent = (initialState = {}) => {
  const utils = render(<UploadFile />, {
    initialState
  });
  const component = utils.queryByTestId('upload');

  return { ...utils, component };
};

describe('UploadFle', () => {
  beforeEach(() => {
    cleanup();
  });

  test('Renders when initialState is empty', () => {
    const { component } = renderComponent();
    expect(component).toBeInTheDocument();
  });

  test('Renders when uploadComplete is true', () => {
    const { component } = renderComponent({ cats: { uploadComplete: true } });
    expect(component).toBeInTheDocument();
  });

  test('Renders loading spinner when isUploading is true', () => {
    const { getByText } = renderComponent({
      cats: { uploading: true }
    });
    expect(getByText('UPLOADING IMAGE...')).toBeInTheDocument();
  });
});
