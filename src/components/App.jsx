import React from "react";
import NavBar from './NavBar';
import Search from './Search';

function App () {
let welcomeDiv = {
  backgroundImage: "url('http://www.livingcharm.com/wp-content/uploads/2017/01/cinque-stunning-italy-1600x1059.jpg')",
  minHeight: "2000px",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"

}
  return (
  <div style={welcomeDiv}>
    <NavBar/>
    <Search/>
  </div>
  );
}

export default App;
