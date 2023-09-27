import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../component/navbar/Header';

test('renders Navbar component', () => {
    
    render(<Navbar />);
  
    // Assert that the "Telstra" link is present in the rendered component
    const telstraLink = screen.getByText('Telstra');
    expect(telstraLink).toBeInTheDocument();
  
  });