import React from 'react';
import { render, screen } from '@testing-library/react';
import Faq from '../component/faqs/Faq';


test('renders the component correctly', () => {
  render(<Faq />);
  const element = screen.getByText('Frequently Asked Questions');
  expect(element).toBeInTheDocument();
});