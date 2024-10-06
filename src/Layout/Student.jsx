import { faker } from '@faker-js/faker';
function Students(props){
   
    return(
     <div className='container p-4'>
     
     <div className='row border'>
         <div className='col-2'>
        <img 
        src={faker.image.avatar()}
            // 'https://avatars.githubusercontent.com/u/97165289'}
        alt="Student"
        className='w-100'
        ></img>
   
      </div>
      <div className='col-10'>
        {props.fullName}<br/>
        <p>Coding Experince : {props.programmingExperince}</p>
      </div>
     </div>
     </div>
    );
  }
  export default Students;