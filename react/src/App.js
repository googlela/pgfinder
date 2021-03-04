import React from 'react';
import Header from "./component/header/header";
import SliderI from "./component/slider/slider"

class App extends React.Component {
  render() {

    return (

      <div className="body">
        <Header />
        <SliderI />
      </div>
    )
  }
}
export default App;