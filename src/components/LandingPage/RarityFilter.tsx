// interface RarityFilterProps {
//   onChange: (selectedRarities: string[]) => void;
// }

import React, { useState } from 'react';

export function RarityFilter() {
  const [selectedRarities, setSelectedRarities] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedRarities(prevSelectedRarities => [...prevSelectedRarities, value]);
    } else {
      setSelectedRarities(prevSelectedRarities => prevSelectedRarities.filter(rarity => rarity !== value));
    }
  };
  // const rarityTypes =[ ]

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="common"
          checked={selectedRarities.includes('common')}
          onChange={handleCheckboxChange}
        />
        Common
      </label>
      <label>
        <input
          type="checkbox"
          value="rare"
          checked={selectedRarities.includes('rare')}
          onChange={handleCheckboxChange}
        />
        Rare
      </label>
      <label>
        <input
          type="checkbox"
          value="epic"
          checked={selectedRarities.includes('epic')}
          onChange={handleCheckboxChange}
        />
        Epic
      </label>
      <label>
        <input
          type="checkbox"
          value="legendary"
          checked={selectedRarities.includes('legendary')}
          onChange={handleCheckboxChange}
        />
        Legendary
      </label>
      {/* Render additional checkboxes for other rarities as needed */}
    </div>
  );
}

export default RarityFilter;
