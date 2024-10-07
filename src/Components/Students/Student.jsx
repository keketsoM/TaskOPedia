import { faker } from '@faker-js/faker';
import React from 'react';
class Students extends React.Component {
   render(){
    return(
      <div className='col-4 p-1'>
      
      <div className='row border'>
          <div className='col-2'>
         <img 
         src={faker.image.avatar()}
             // 'https://avatars.githubusercontent.com/u/97165289'}
         alt="Student"
         className='w-100'
         ></img>
    
       </div>
       <div className='col-8'>
         {this.props.fullName}<br/>
         <p>Coding Experince : {this.props.programmingExperince}</p>
       </div>
       <div className='col-2'>
         {this.props.children}
       </div>
      </div>
      </div>
     );
   }
  }
  export default Students;