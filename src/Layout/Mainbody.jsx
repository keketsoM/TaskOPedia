

export default function MainBody(){
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
      
    </div>
  
    );
  
  }