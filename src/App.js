import React from 'react';
import "./App.css";
import Hello from "./components/sayHello";
import Header from './components/Header';
import Footer from "./components/footer";
import UploadForm from './components/UploadForm';


function App() {
  
  return (
    
   <div className="app">
     
     <Header />
     {/* <h1>My Favorite Sports</h1>
     <ul>
       <li>Basketball</li>
       <li>Soccer</li>
       <li>Water Polo</li>
     </ul>  */}
    <Hello />

    <UploadForm />

    <Footer />
    
   
    
     
    </div>  
  )
}

export default App;
