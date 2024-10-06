import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import MainBody from './Layout/Mainbody';
import Students from './Layout/Student';

const root=ReactDOM.createRoot(document.getElementById("root"));




root.render(
  <div style={{backgroundColor:"black", color:"gray"}}>
<Header/>
<MainBody/>
<div className="container row">
        Students Enrolled
      </div>
<Students programmingExperince = {2} fullName = "Kris Walley" headshot = "https://drive.google.com/file/d/1M4SusFwLgUHZ-e9thOVRtclFovK7fLD8/view?usp=drive_link" />
<Students programmingExperince = {1} fullName = "Keke Mollo" headshot = "https://api.lorem.space/image/face?w=150&h=152" />
<Students programmingExperince = {4} fullName = "Kat Melley" headshot = "https://api.lorem.space/image/face?w=150&h=154" />

<Footer/>
  </div>
 
);
