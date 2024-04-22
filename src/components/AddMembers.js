import React from 'react'
import { useState } from 'react'
import imageSrc from './Assets/Arrow_left_light.png'
import { useNavigate } from 'react-router-dom';

function AddMembers() {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const navigate= useNavigate();
   
    const handleImageUpload = (e) => {     
      const file = e.target.files[0] 
      if(file)
      {
       const reader = new FileReader();
       reader.onload = (e) => {
         const dataurl = e.target.result;
         setImage(dataurl)
       }
       reader.readAsDataURL(file)
      } 
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();     
        let id = localStorage.length;
        let userid = id++;
        localStorage.setItem(
          userid,JSON.stringify({name : name, title : title, file: image})
        )
        navigate('/home');

   };

  return (

    <div>
        <a href="/home" className="home-link">
            <img src={imageSrc} alt="Home" />
        </a>
      
    <form className="add-form" onSubmit={handleSubmit}>
      <div className='add-Picture'>
        <img src ={image} width= "90px" />
        <label>
          <input className='file-upload' type="file" onChange={handleImageUpload}  />
          <span><i className="fa fa-plus" aria-hidden="true"></i></span>
        </label>
        
        
      </div>

      <br />
    <div className="form-control">
      <ul>
        <input type="text"
         className='text-area'
         placeholder="Full Names"
         value={name} 
         onChange={(e) => setName(e.target.value)}
         required
         />
      </ul>
       
    </div>
    <br />

    <div className="form-control">
      <ul>
        <input type="text"
         className='text-area'
         placeholder="Job Title" 
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         required
         />
      </ul>
    </div>
 

    <br />
    <br />
    <div className='btnMember'>
        <button className='btnAdd'>Add Member</button>
    </div>
    
</form>

</div>
  )

}

export default AddMembers
