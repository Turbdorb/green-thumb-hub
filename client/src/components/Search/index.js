import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PLANT_TO_GARDEN } from "../../utils/mutations";
import { Toast } from 'flowbite-react';
import { HiCheck, HiX, HiExclamation } from 'react-icons/hi';

const Search = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [inputID, setInputID] = useState("");

  const [addPlantToGarden] = useMutation(ADD_PLANT_TO_GARDEN);

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
    const { common_name, scientific_name, watering, sunlight, description, _id, default_image } = items[0];
    const { medium_url } = default_image;
    console.log(medium_url);

    try {
      const { data } = await addPlantToGarden({
        variables: {
          plant: {
          common_name: common_name,
          scientific_name: scientific_name[0],
          watering: watering,
          sunlight: sunlight[0],
          description: description,
          _id: _id,
          imgURL: medium_url
        }},
      });

      // Handle the response data if needed
      console.log("Plant added successfully:", data);
    } catch (error) {
      console.error("An error occurred while adding the plant:", error);
    }
  };

  const jsxcss = "bg-transparent rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-sm border-t-0 border-b-0 border-2 border-green-500 shadow-xl shadow-black p-4 hover:bg-zinc-100";

  return (
    <div className="font-body flex flex-row justify-center items-center w-full  shadow-black">
      <input
        className="rounded-md p-2 m-2 text-black bg-white border focus:border-green-400 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40"
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
          <div key={index} className="m-4 p-4 bg-zinc-50/75 text-center rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm border-2 border-green-600 2xl:mx-64">
            <ol className={jsxcss}>{item.common_name}</ol>
            {item.default_image?.medium_url
              ? (<img src={item.default_image.medium_url} alt="Plant" className="mx-auto my-4 rounded-t-full rounded-b-full shadow-black shadow-xl h-96 w-96" />
              )
              : ("Image not available")
            }
            <ol className={jsxcss}>Scientific Name: {item.scientific_name}</ol>
            <ol className={jsxcss}>Watering: {item.watering}</ol>
            <ol className={jsxcss}>Sunlight: {item.sunlight}</ol>
            <ol className={jsxcss}>Cycle: {item.cycle}</ol>
            <ol className={jsxcss}>Growth Rate: {item.growth_rate}</ol>
            <ol className={jsxcss}>Maintenance: {item.maintenance}</ol>
            <ol className={jsxcss}>Hardiness: {item.hardiness.min}</ol>
            <ol className={jsxcss}>Edible Fruit: {item.edible_fruit ? "Yes" : "No"}</ol>
            <ol className={jsxcss}>Description: {item.description}</ol>
            <div className="flex flex-col gap-4">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Plant has been added.
        </div>
        <Toast.Toggle />
      </Toast>
  </div>
            <button
              className="bg-blue-600 rounded-md p-2 m-2 shadow-sm shadow-black text-zinc-50"
              onClick={addPlant}
              
            >
              Add Plant
            </button>
          </div>
        ))}

    </div>
  );
};

export default Search;
