import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
const root=ReactDOM.createRoot(document.getElementById("root"));
function Header(){
  return(
    <div>
<h1 className='heading1'>React Course</h1>
<Subhearding></Subhearding>
    </div>
    
  );
}
function Subhearding(){
  return(
    <p style={headerStyle}>This will be an exciting course.</p>
  );
}
const headerStyle={
color:'red', 
backgroundColor:'pink'
}
function Students(){
  const name = "Kris Walley ";
  const programmingExperince = 2;
  return(
   <div className='container p-4'>
    <div className="row">
      Students Enrolled
    </div>
   <div className='row border'>
       <div className='col-2'>
      <img src='https://ui-avatars.com/api/?name=John+Doehttps://ui-avatars.com/api/?name=John+Doe'></img>
 
    </div>
    <div className='col-10'>
      {name}<br/>
      <p>Programming Experince : {programmingExperince}</p>
    </div>
   </div>
   </div>
  );
}
function Footer()
{
  return(
    <p style={{color:'grey', 
      backgroundColor:'black'}}>Happy Coding!</p>
  );
}
function MainBody(){
  const whatWillLearn ="React Js";
  const totalLecture =3;
  return(
    <div>
    <p>In this course, we will learn {whatWillLearn} by building TaskOPedia!</p>
    <p>Total lecture: {totalLecture}</p>
    <ul>
      <li>Basic Foundation</li>
      <li>Functional and Class Components</li>
    </ul>
    {/*<div>
      <label>Enter task :</label>
      <input maxLength={8} readOnly={false} placeholder='Ben'></input>
    </div>*/}
    
  </div>

  );

}

root.render(
  <div>
<Header/>
<MainBody/>
<Students/>
<Footer/>
  </div>
 
);
