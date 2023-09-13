import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PLANT_TO_GARDEN } from "../../utils/mutations";

const Search = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [inputID, setInputID] = useState("");

  const [addPlantMutation] = useMutation(ADD_PLANT_TO_GARDEN);

  const handleInputChange = (e) => {
    setInputID(e.target.value);
  };

  const fetchData = async () => {
    const commonName = inputID;
    console.log("Common name searched:", commonName);

    try {
      const response1 = await fetch(
        `https://perenual.com/api/species-list?key=${process.env.REACT_APP_API_KEY}&q=${commonName}`
      );
      const data1 = await response1.json();
      console.log("first API response:", data1);

      if (data1.data && data1.data.length > 0) {
        const id = data1.data[0].id;

        const response2 = await fetch(
          `https://perenual.com/api/species/details/${id}?key=${process.env.REACT_APP_API_KEY}`
        );
        const data2 = await response2.json();

        setItems([data2]);
        setDataIsLoaded(true);
      } else {
        console.log("No results found");
        setItems([]);
        setDataIsLoaded(true);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const addPlant = async () => {
    const { common_name, scientific_name, watering, sunlight, cycle, description, growth_rate, hardiness, maintenance, _id } = items[0];

    try {
      const { data } = await addPlantMutation({
        variables: {
          common_name,
          scientific_name,
          watering,
          sunlight,
          cycle,
          description,
          growth_rate,
          hardiness,
          maintenance,
          _id
        },
      });

      // Handle the response data if needed
      console.log("Plant added successfully:", data);
    } catch (error) {
      console.error("An error occurred while adding the plant:", error);
    }
  };

  return (
    <div className="font-body flex flex-row justify-center items-center w-full  shadow-black">
      <input
        className="rounded-md p-2 m-2 border border-green-700 ring-1 ring-green-500 focus:ring-1 focus:ring-green-500"
        type="text"
        value={inputID}
        onChange={handleInputChange}
        placeholder="Search plants..."
      />
      <button
        className="bg-green-600 rounded-md p-2 m-2 shadow-sm shadow-black text-zinc-50"
        onClick={fetchData}
      >
        Search
      </button>

      {dataIsLoaded &&
        items.map((item, index) => (
          <div key={index} className="m-4 p-4 bg-zinc-50/75 text-center">
            <ol>{item.common_name}</ol>
            <ol>Scientific Name: {item.scientific_name}</ol>
            <ol>Watering: {item.watering}</ol>
            <ol>Sunlight: {item.sunlight}</ol>
            <ol>Cycle: {item.cycle}</ol>
            <ol>Growth Rate: {item.growth_rate}</ol>
            <ol>Maintenance: {item.maintenance}</ol>
            <ol>Hardiness: {item.hardiness.min}</ol>
            <ol>Edible Fruit: {item.edible_fruit ? "Yes" : "No"}</ol>
            <ol>Description: {item.description}</ol>
            {item.default_image?.medium_url 
              ? (<img src={item.default_image.medium_url} alt="Plant" />
            ) 
            : ("Image not available")
            }
          </div>
        ))}
      <button
        className="bg-blue-600 rounded-md p-2 m-2 shadow-sm shadow-black text-zinc-50"
        onClick={addPlant}
      >
        Add Plant
      </button>
    </div>
  );
};

export default Search;
