import "./App.css";
import data from "./assets/data/data";
import Card from "./leyaut/card/card";
import Header from "./leyaut/header/header";
function App() {
 console.log(data);
 return <div className="box">
 
 <Header data={data.header}/>
<Card data={data.products}/>
  </div>;
}

export default App;
