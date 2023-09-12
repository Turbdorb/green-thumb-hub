import React from "react";
console.log("Plant imported");
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      inputID: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  handleInputChange(e) {
    this.setState({ inputID: e.target.value });
  }


  async fetchData() {
    const commonName = this.state.inputID;
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

        this.setState(
          {
            items: [data2],
            DataisLoaded: true,
          },
          () => {
            console.log("State after setting data:", this.state);
          }
        );
      } else {
        console.log("No results found");
        this.setState({
          items: [],
          DataisLoaded: true,
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  render() {
    const { DataisLoaded, items } = this.state;

    return (
      <div className="App flex justify-center items-center bg-gray-400">
        <input
          className="bg-zinc-100 rounded-md p-2 m-2 border border-green-700 ring-1 ring-green-500 focus:ring-1 focus:ring-green-500"
          type="text"
          value={this.state.inputID}
          onChange={this.handleInputChange}
          placeholder="Search plants..."
        />
        <button
          className="bg-green-600 rounded-md p-2 m-2 shadow-sm shadow-black text-zinc-50"
          onClick={this.fetchData}
        >
          Search
        </button>

        {DataisLoaded &&
          items.map((item, index) => (
            <div key={index}>
              {/* <ol>Common Name: {item.common_name}</ol> */}
              <ol>Scientific Name: {item.scientific_name}</ol>
              <ol>Watering: {item.watering}</ol>
              <ol>Sunlight: {item.sunlight}</ol>
              <ol>Cycle: {item.cycle}</ol>
              <ol>Growth Rate: {item.growth_rate}</ol>
              <ol>Maintenance: {item.maintenance}</ol>
              <ol>Hardiness: {item.hardiness.min}</ol>
              <ol>Edible Fruit: {item.edible_fruit ? "Yes" : "No"}</ol>
              <ol>Description: {item.description}</ol>
              {item.default_image.medium_url ? (
                <img src={item.default_image.medium_url} alt="Plant" />
              ) : (
                "Image not available"
              )}
            </div>
          ))}
      </div>
    );
  }
}

export default Search;
