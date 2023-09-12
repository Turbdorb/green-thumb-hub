import React from "react";
console.log("Plant imported");
class Search extends React.Component {
  // Constructor
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

  // ComponentDidMount is used to
  // execute the code
  fetchData() {
    const { inputID } = this.state;
    fetch(
      `https://perenual.com/api/species/details/${inputID}?key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("API Response: ", json);
        this.setState({
          items: [json],
          DataisLoaded: true,
        });
      });
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
        <button className="bg-green-600 rounded-md p-2 m-2 shadow-sm shadow-black text-zinc-50" onClick={this.fetchData}>Search</button>

        {DataisLoaded &&
          items.map((item, index) => (
            <div key={index}>
              <ol>Common Name: {item.common_name}</ol>
              <ol>Scientific Name: {item.scientific_name}</ol>
              <ol>Watering: {item.watering}</ol>
              <ol>Sunlight: {item.sunlight}</ol>
              <ol>Cycle: {item.cycle}</ol>
              <ol>Growth Rate: {item.growth_rate}</ol>
              <ol>Maintenance: {item.maintenance}</ol>
              <ol>Hardiness: {item.hardiness.min}</ol>
              <ol>Edible Fruit: {item.edible_fruit ? "Yes" : "No"}</ol>
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
