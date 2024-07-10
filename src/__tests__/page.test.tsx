import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from '../app/page';
import { count } from 'console';

describe('Page', () => {
  it('renders a heading', () => {
    //render(<Page />);
    const { getByText, queryByText } = render(<Page />);

    // Assume "Other Projects" is unique to the div
    const div = getByText(/Other Projects/i);

    // Check if the section is not visible initially
    expect(
      queryByText(/Miscellaneous Other Projects that I have worked on./i)
    ).not.toBeInTheDocument();

    // Click the div to open the section
    fireEvent.click(div);

    // Check if the section is visible
    expect(
      getByText(/Miscellaneous Other Projects that I have worked on./i)
    ).toBeInTheDocument();

    // Click the div again to close the section
    fireEvent.click(div);

    // Check if the section is not visible
    expect(
      queryByText(/Miscellaneous Other Projects that I have worked on./i)
    ).not.toBeInTheDocument();

    fireEvent.click(div);

    expect(
      queryByText(/Miscellaneous Other Projects that I have worked on./i)
    ).toBeInTheDocument();

    ///const heading = screen.getByRole('heading', { level: 1 });
    //expect(heading).toHaveTextContent('Welcome to the Next.js Starter');
  });
});
