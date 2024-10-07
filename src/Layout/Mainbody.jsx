import React from 'react';
import Students from '../Components/Students/Student';
import StudentReview from '../Components/Students/StudentReview';
class MainBody extends React.Component{
render(){
  const whatWillLearn ="React Js";
  const totalLecture =3;
  return(
    <div style={{minHeight:"70vh"}}>
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
      <div className="container row">
      Students Enrolled
    </div>
    <Students programmingExperince = {4} fullName = "Kat Melley" headshot = "https://api.lorem.space/image/face?w=150&h=154" />
    <Students programmingExperince = {2} fullName = "Kris Walley" headshot = "https://drive.google.com/file/d/1M4SusFwLgUHZ-e9thOVRtclFovK7fLD8/view?usp=drive_link">
    <StudentReview/>
    </Students>
      <Students programmingExperince = {1} fullName = "Keke Mollo" headshot = "https://api.lorem.space/image/face?w=150&h=152">
      <StudentReview/>
      </Students>
      </div>
  );

 }
}
export default MainBody;