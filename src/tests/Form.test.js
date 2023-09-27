import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../component/onBoardingPage/Form';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') ,
  useNavigate: () => mockedUsedNavigate,
}));

test('renders the component correctly', () => {
  render(<Form />);
  const element = screen.getByText('Feedback Survey');
  expect(element).toBeInTheDocument();
});