
import "./App.css";
import { Description } from "./components/Description/description";
import { Header } from "./components/Header";
import { CardsWrapper } from "./components/Cards-Wrapper/cards-wrapper";
import { Form } from "./components/Form/form";

function App() {
  return (
	<div className="App">
    	<Header />
      	<Description />
      	<CardsWrapper/>
		<Form/>
	</div>
  );
}

export default App;
