import React from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
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
      <div className="bg-black h-screen">
        <div className="flex flex-col mt-24 justify-center items-center border text-center p-4 bg-red-200 container">
          <Nav />
          <Search />
          <div>
            <h1> Fetch data from an api in react </h1>{" "}
            {items.map((item) => (
              <ol className="" key={item.id}>
                User_Name: {item.username}, Full_Name: {item.name}, User_Email:{" "}
                {item.email}
              </ol>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// function Plant() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <Routes>
//           <Route path="/search" element={<Search />} />
//         </Routes>
//       </Router>
//     </ApolloProvider>
//   );
// }

export default Plant;
