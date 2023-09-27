import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom'; 
import OnBoardPage from '../component/onBoardingPage/OnBoardPage';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') ,
  useNavigate: () => mockedUsedNavigate,
}));

describe('OnBoardPage', () => {
    it('navigates to the correct route when a task is clicked', () => {
      // Mock navigate function
      const mockNavigate = useNavigate();
      
      // Render the component
      render(<OnBoardPage checkedItems={[]} progress={50} />);
      
      // Find the checkbox for a task by its label text
      const taskCheckbox = screen.getByLabelText('Onboarding Feedback Survey');
      
      // Simulate a click on the checkbox
      fireEvent.click(taskCheckbox);
  
      // Assert that navigate was called with the expected route
      expect(mockNavigate).toHaveBeenCalledWith('/onboard/form/1');
    });
  });
  
  
  
  
  