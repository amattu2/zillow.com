import React from 'react';
import { screen, render } from '@testing-library/react';
import { ApiProviderStatus, ApiProvider, useApi } from './ApiProvider';

const TestChild = () => {
  const { status } = useApi();

  if (status === ApiProviderStatus.LOADING) {
    return <div>Loading...</div>;
  }

  return <div>Loaded</div>;
};

const TestParent = () => {
  return (
    <ApiProvider>
      <TestChild />
    </ApiProvider>
  );
}

describe('ApiProvider General Tests', () => {
  it('renders loading state initially', () => {
    render(<TestParent />);

    expect(() => screen.getByText('Loading...')).not.toThrow();
  });

  it('throws error when useApi is used outside of ApiProvider', () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<TestChild />)).toThrowError('useApi must be used within a ApiProvider');
    jest.spyOn(console, "error").mockRestore();
  });
});
