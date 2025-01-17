import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import '@testing-library/jest-dom';

describe('Pagination Component', () => {
  test('renders the Pagination Data', () => {
    const count = 50
    const currentPage = 1
    render(<Pagination count={count} currentPage={currentPage} />);
    // Assert that the button with the label exists in the document
    expect(count).toBe(50)
    const paginationPrevious = screen.getByText(/Previous/i);
    const paginationNext = screen.getByText(/next/i);
    expect(paginationPrevious).toBeInTheDocument();
    expect(paginationNext).toBeInTheDocument();
  });
});