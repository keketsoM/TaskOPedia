import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Footer from './Layout/Footer';
import Header from './Layout/HeaderTop';
import MainBody from './Layout/Mainbody';


const root=ReactDOM.createRoot(document.getElementById("root"));




root.render(
  <div style={{backgroundColor:"black", color:"gray"}}>
<Header/>
<div className='px-4'>
<MainBody/>
</div>
<Footer/>
  </div>
 
);
