import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor ="">Title</label>
            <input type="text" placeholder="eg. I will do something I'm really good at" />

            <label htmlFor ="">Category</label>
            <select name ="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>

              <label htmlFor ="">Cover Image</label>
              <input type="file" />
              <label htmlFor ="">Upload Images</label>
              <input type="file" multiple />
              <label htmlFor ="">Description</label>
              <textarea name="" 
                placeholder="Brief description about your gig" id="" 
                cols="30" rows="16"></textarea>
                <button>Create</button>
            </select>
          </div>


          <div className="right">

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Add

