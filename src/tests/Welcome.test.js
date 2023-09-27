import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomePage from '../component/welcomePage/WelcomePage';


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') ,
  useNavigate: () => mockedUsedNavigate,
}));

test('renders the component correctly', () => {
  render(<WelcomePage />);
  const element = screen.getByText('Welcome to Your Chatbot');
  expect(element).toBeInTheDocument();
});