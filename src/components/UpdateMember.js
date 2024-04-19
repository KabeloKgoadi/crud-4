import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import imageSrc from './Assets/Arrow_left_light.png'

function UpdateMember() {
    const {id} = useParams();
    const members = JSON.parse(localStorage.getItem(id));
    const [name, setName] = useState(members.name)
    const [title, setTitle] = useState(members.title)
    const [image, setImage] = useState(members.image)
    const navigate= useNavigate();

    const handleUpdatedImage = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            const dataUrl = e.target.result;
            setImage(dataUrl);
          };
    
          reader.readAsDataURL(file);
        }
      };
   
    const handleUpdate =  (e) => {
        e.preventDefault();

        localStorage.setItem(id, 
            JSON.stringify({name: name, title: title, file: image}))
        navigate('/');
    }

    
  return (
    <div>
        <div>
            <a href="/" className="home-link">
              <img src={imageSrc} alt="Home" />
            </a>
          </div>

        <form className="add-form" onSubmit={handleUpdate}>
          
          <div className='add-Picture'>
            <img src ={image} width= "90px" />
              <label>
                <input className='file-upload' type="file" onChange={handleUpdatedImage}   />
                <span><i className="fa fa-plus" aria-hidden="true"></i></span>
              </label>
          </div>
          <br />
          <br />

          <div className="form-control">
            <ul>
                <input type = "text"
                  className='text-area'
                  placeholder = 'Full Name'
                  onChange={e => setName(e.target.value)}>
                </input>
                <br/>
            </ul>
          </div>

          <br />
          <br />

          <div className="form-control">
            <ul>
                <input type = "text"
                  className='text-area'
                  placeholder='Job Title'
                  onChange={e => setTitle(e.target.value)}>
                </input>
            </ul>
          </div>
            <br />
            <br />
          <div className='btnMember'>
              <button className='btnAdd'>Edit member</button>
          </div>
          
              
                
          
        </form>
      
    </div>
  )
}

export default UpdateMember
