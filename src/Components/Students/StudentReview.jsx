import React from "react";

class StudentReview extends React.Component{
   render(){
      return(
         <div className="p-2">
            <i class="bi bi-hand-thumbs-up text-success" style={{cursor:"pointer"}}></i>
            <i class="bi bi-hand-thumbs-down text-danger" style={{cursor:"pointer"}}></i>
         </div>
      )
   }
    
}
export default StudentReview;