import React from "react";
console.log("Plant imported");
class Plant extends React.Component {
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
      `https://perenual.com/api/species/details/${inputID}?key=sk-1mUv64f8d062432ff2096`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: [json],
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputID}
          onChange={this.handleInputChange}
        />
        <button onClick={this.fetchData}>Submit</button>
        {DataisLoaded &&
          items.map((item) => (
            <ol key={item.id}>Common Name: {item.common_name}</ol>
          ))}
      </div>
    );
  }
}

export default Plant;
