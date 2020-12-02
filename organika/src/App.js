import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Product from "./components/product/product";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1>Hello React</h1>

      <Product></Product>

      <Footer></Footer>
    </div>
  );
}

export default App;
