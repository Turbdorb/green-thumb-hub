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
    const jsxcss = "bg-transparent rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-sm border-t-0 border-b-0 border-2 border-green-500 shadow-xl shadow-black p-4 hover:bg-zinc-100";
    
    const { DataisLoaded, items } = this.state;

    return (
      <div className="font-body flex flex-row justify-center items-center w-full shadow-black">
        <input
          className="rounded-md p-2 m-2 border border-green-700 ring-1 ring-green-500 focus:ring-1 focus:ring-green-500"
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
            <div key={index} className="m-4 p-2 bg-zinc-50/75 text-center  rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm border-2 border-green-500 shadow-xl shadow-black 2xl:mx-64">
              <ol className={jsxcss}>Common Name: {item.common_name}</ol>
              {item.default_image?.medium_url
                ? (<img src={item.default_image.medium_url} alt="Plant" className="mx-auto my-4 rounded-t-full rounded-b-full shadow-black shadow-xl h-96 w-96"/>)
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
            </div>
          ))}
      </div>
    );
  }
}

export default Search;
