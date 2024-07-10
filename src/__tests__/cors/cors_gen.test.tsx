import { render, fireEvent, findByText, act } from '@testing-library/react';
import Page from '../../app/cors/page';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

test('submits the form and handles the response', async () => {
  // Mock the fetch function
  jest.fn(() => {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          Allowed_Headers:
            'Authorization,Content-Type,Accept,Origin,X-Requested-With',
          Allowed_Methods: 'mock methods',
          Allowed_Origin: 'mock origin',
          Allowed_Credentials: 'mock credentials',
          Simple: false,
          Allowed: 'mock allowed',
        }),
    });
  
  });
  const mockFetch = jest.fn().mockResolvedValue({
    json: () =>
      Promise.resolve({
        Allowed_Headers:
          'Authorization,Content-Type,Accept,Origin,X-Requested-With',
        Allowed_Methods: 'mock methods',
        Allowed_Origin: 'mock origin',
        Allowed_Credentials: 'mock credentials',
        Simple: false,
        Allowed: 'mock allowed',
      }),
  });
  global.fetch = mockFetch;

  const { getByLabelText, getByText } = render(<Page />);

  // Fill out the form
  fireEvent.change(getByLabelText(/endpoint/i), {
    target: { value: 'mock endpoint' },
  });
  fireEvent.change(getByLabelText(/method/i), {
    target: { value: 'PUT' },
  });
  fireEvent.change(getByLabelText(/headers/i), {
    target: { value: 'Authorization' },
  });
  fireEvent.change(getByLabelText(/origin/i), {
    target: { value: 'http://localhost:3000' },
  });
  fireEvent.change(getByLabelText(/credentials/i), {
    // target: { value: true },
  });

  fireEvent.change(getByLabelText(/credentials/i), {
    target: { checked: true },
  });

  await act(async () => {
    await fireEvent.click(screen.getByRole('checkbox'));
  });

  await act(async () => {
    await fireEvent.click(screen.getByRole('checkbox'));
  });

  expect(screen.getByRole('checkbox')).toBeChecked();

  // Submit the form
  fireEvent.click(getByText(/submit/i));

  // Check if fetch was called with the correct arguments
  expect(mockFetch).toHaveBeenCalledWith('/api/cors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      endpoint: 'mock endpoint',
      method: 'PUT',
      headers: 'Authorization',
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  });

  // Check if the component's output changes as expected
  // You'll need to wait for the changes to be applied, which you can do using the `findByText` function
  expect(await screen.findByText(/mock methods/i)).toBeInTheDocument();
  expect(await screen.findByText(/mock origin/i)).toBeInTheDocument();
  //expect(await screen.findByText(/credentials/i)).toBeInTheDocument();
  //expect(await screen.findByText(/simple/i)).toBeInTheDocument();
  //expect(await screen.findByText(/mock allowed/i)).toBeInTheDocument();
});
