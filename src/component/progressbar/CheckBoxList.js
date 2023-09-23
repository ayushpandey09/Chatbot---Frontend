import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function CheckboxList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const totalItems = 10; // Replace with the total number of items in your list
  const [progress ,setProgress] = useState(0);

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
    console.log(selectedItems)
    
   
  };

  return (
    <div>
      {/* Your checkbox list */}
      <ul>
        {Array.from({ length: totalItems }, (_, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={selectedItems.includes(index)}
              />
              Item {index + 1}
            </label>
          </li>
        ))}
      </ul>

      {/* Custom progress bar */}
      {/* <ProgressBar totalItems={totalItems} selectedItems={selectedItems} /> */}
      
    </div>
  );
}

export default CheckboxList;
