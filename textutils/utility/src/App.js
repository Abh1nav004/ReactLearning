import './App.css';
import Navbar from './components/Navbar'; // Importing the custom Navbar
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* Your Custom Navbar Component */}
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      {/* <Navbar></Navbar> */}
      <TextForm></TextForm>
    </>

  );
}

export default App;
