import React from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => {
    const data = Object.keys(localStorage)


    function handleDelete (id)
    {
        localStorage.removeItem(id);
        window.location.reload();
    }
    
  return (
    <body>
      
        <button className='btnAddHome'><Link to={`/create`}>Add Member</Link></button>
        
        <br />
        <br />
        {localStorage.length !==0 ? (
            data.map((value,id) => {
              const user = JSON.parse(localStorage.getItem(value))
              return (
                  <div key={id}>
                    
                    <div className='body-container'>
                      <div className='body-picture'>
                          <img className='display-picture' src={user.file} alt="Uploaded Picture"  width = "90px"/>
                      </div>
                        <div className='body-items'>
                            <h2>{user.name}</h2>
                            <h6>{user.title}</h6>
                        </div>

                        <div className='member__edit'>
                          <Link to={`/update/${id}`}> <i className='fas fa-pen'></i></Link>
                          <i className='fas fa-trash' onClick={() => handleDelete(id)}></i>
                        </div>
                       
                    </div>
                    <br />
                    <br />
                    <br />
                  </div>     
                             
              )
              
            })
        ) : (
          <div className='member-null'>
            <p>No Members in the database</p>
          </div>
        )}
       
      
    </body>
  )
}

export default Homepage
