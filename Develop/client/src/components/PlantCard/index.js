import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { WATER_PLANT } from '../../utils/mutations';

const WateringCheckbox = ({ plantId }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [addWateringEvent] = useMutation(WATER_PLANT);
  
    const handleCheckboxChange = async () => {
      try {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
  
        await addWateringEvent({
          variables: {
            plantId: plantId,
            date: formattedDate,
            watered: !isChecked
          }
        });
  
        setIsChecked(!isChecked);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <label>
          Watered:
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
    );
};

const PlantCard = ({ plantId }) => {
    const [plantDetails, setPlantDetails] = useState(null);

    useEffect(() => {
        const fetchPlantDetails = async () => {
            try {
                const response = await fetch(`https://perenual.com/api/species/details/${plantId}?key=sk-JExt64f8ad72747e22055`);
                const data = await response.json();
                setPlantDetails(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPlantDetails();
    }, [plantId]);
    
    return (
        <div className="card">
          {/* Plant Image here */}
          {plantDetails && (
            <ul style={{ listStyleType: 'none' }}>
              <li>{plantDetails.common_name}</li>
              <li>{plantDetails.scientific_name}</li>
              <li><WateringCheckbox plantId={plantId}/></li>
            </ul>
          )}   
        </div>
    )
};

export default PlantCard;