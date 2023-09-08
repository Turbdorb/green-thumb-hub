import React from "react";
console.log("Plant imported");
class Plant extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      "https://perenual.com/api/species/details/1?key=sk-1mUv64f8d062432ff2096"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        console.log("API response:", json);
        this.setState({
          items: [json],
          DataisLoaded: true,
        });
      })
      .catch((error) => {
        console.log("There was a problem with the fetch operation: ", error);
      });
  }
  render() {
    console.log("Plant component rendered");
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            User_Name: {item.username}, Full_Name: {item.name}, User_Email:{" "}
            {item.email}
          </ol>
        ))}
      </div>
    );
}
}


export default Plant;