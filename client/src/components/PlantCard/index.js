import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { WATER_PLANT, DELETE_PLANT } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import Search from '../Search';

function WateringButton(plantId) {
  const currentDate = new Date().toISOString();
  
  const [isWatered, setIsWatered] = useState(false);
  const [addWateringEvent] = useMutation(WATER_PLANT);
  
  const handleWatering = async () => {
    try {
      const currentDate = new Date().toISOString();
  
      await addWateringEvent({
        variables: {
          plantId: plantId,
          date: currentDate,
          watered: true
        }
      });
  
      setIsWatered(true);
    } catch (error) {
      console.error(error);
    }
  };

  let user;
  const { data } = useQuery(QUERY_USER);
  
  if (data) {
    user = data.user;
  }

  useEffect(() => {
    try {
      const lastWatering = user?.plants[1].wateringHistory[user.plants[1].wateringHistory.length -1];
        
      if (lastWatering !== currentDate) { setIsWatered(true); }
    } catch (error) {
      console.log(error);
    }
  }, [plantId]);
  
  return (
      <button disabled={isWatered} onClick={handleWatering}>
        {isWatered ? 'Watered' : 'Water Me!'}
      </button>
  );
};

function DeleteButton(plantId) {
  const [deletePlant] = useMutation(DELETE_PLANT);

  const handleDelete = async () => {
    try {
      await deletePlant({ variables: { plantId }});
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleDelete}>Delete Plant</button>;
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
        <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          
          {/* Plant Image here */}
          {plantDetails && (
            <ul style={{ listStyleType: 'none' }}>
              <li>{plantDetails.common_name}</li>
              <li>{plantDetails.scientific_name}</li>
              <li><WateringButton plantId={plantId}/></li>
              <li><DeleteButton plantId={plantId}/></li>
            </ul>
          )}   
        </div>
    )
};

export default PlantCard;
