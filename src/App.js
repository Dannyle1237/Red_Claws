import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Intro from './components/Intro'
import OrderSection from './components/OrderSection'
function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Intro></Intro>
      <OrderSection></OrderSection>
    </div>
  );
}

export default App;
