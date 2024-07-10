jest.mock('node-fetch');

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from '../../app/cors/page';
/*
describe('Page', () => {
  // Start Mocking the Fetches
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: '12345' }),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});

// Test the Page
it('renders a heading', async () => {
  const { getByText, queryByText } = render(<Page />);

  // Fill Out All THe Inputs

  // Press Submit Button

  // Will make fetch -> See if Expected Response
});*/
