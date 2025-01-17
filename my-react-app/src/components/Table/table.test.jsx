import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from './Table';
import '@testing-library/jest-dom';

describe('Table Component', () => {
  test('renders the Table Data', () => {
    const tableData = [
        {
            "s.no": 0,
            "amt.pledged": 15823,
            "percentage.funded": 186
        },
        {
            "s.no": 1,
            "amt.pledged": 9833,
            "percentage.funded": 653
        },
        {
            "s.no": 2,
            "amt.pledged": 44343,
            "percentage.funded": 432
        }
    ]
    render(<Table data={tableData} />);
    // Assert that the button with the label exists in the document
    expect(tableData.length).toBe(3)
    const tableEl = screen.getByText(/Amount Pledged/i);
    expect(tableEl).toBeInTheDocument()
    expect(tableData[1]['amt.pledged']).toBe(9833)
    expect(tableData[2]['percentage.funded']).toBe(432)
  });
});