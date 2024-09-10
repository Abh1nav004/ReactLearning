import './App.css';
import Navbar from './components/Navbar'; // Importing the custom Navbar
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* Your Custom Navbar Component */}
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      {/* <Navbar></Navbar> */}
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      </div>
      
    </>

  );
}

export default App;
