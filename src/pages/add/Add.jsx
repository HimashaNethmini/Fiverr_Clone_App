import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className='info'>
          <div className="left">
            <label htmlFor ="">Title</label>
            <input type="text" placeholder="eg. I will do something I'm really good at" />

            <label htmlFor ="">Category</label>
            <select name ="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

              <label htmlFor ="">Cover Image</label>
              <input type="file" />
              <label htmlFor ="">Upload Images</label>
              <input type="file" multiple />
              <label htmlFor ="">Description</label>
              <textarea name="" 
                placeholder="Brief description about your gig" id="" 
                cols="30" rows="16"></textarea>
                <button>Create</button>
            
          </div>

          <div className="details">
            <label htmlFor ="">Service Title</label>
            <input type="text" placeholder="eg. One page web design" />
            <label htmlFor ="">Short Description</label>
            <textarea name="" 
                placeholder="Short description about your gig" id="" 
                cols="30" rows="10"></textarea>
            <label htmlFor ="">Delivery Time (eg. 3 days )</label>
            <input type="number" />
            <label htmlFor ="">Revision Time</label>
            <input type="number" />
            <label htmlFor ="">Add feature</label>
            <input type="text" placeholder="eg. page design" />
            <input type="text" placeholder="eg. file uploading" />
            <input type="text" placeholder="eg. setting up a domain" />
            <input type="text" placeholder="eg. hosting" />
            <label htmlFor ="">Price</label>
            <input type="number" />

          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Add;

