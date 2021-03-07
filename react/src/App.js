import React from 'react';
import Header from "./component/header/header";
import Login from "./component/Login/login";

class App extends React.Component {
  render() {

    return (

      <div className="body">
        <Header />
        <Login />
      </div>
    )
  }
}
export default App;