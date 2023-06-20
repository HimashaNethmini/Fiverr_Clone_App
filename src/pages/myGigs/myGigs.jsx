import React from 'react'
import "./MyGigs.scss"

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th> 
          </tr>
          <tr>
            <td>
              < img 
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="" 
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
        </table>

      </div>
      
    </div>
  )
}

export default MyGigs;
