import React from 'react'


class Contact extends React.Component {
  render() {
    return (
      <div className="contact">

        <div className="contact-banner">
          <div className="contact-heading">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="contact-content-container">
          <p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className="contact-info">
            <div>
              <h4>Email</h4>
              <p>info@animalia.co.uk</p>
            </div>
            <div>
              <h4>Telephone</h4>
              <p>01234567890</p>
            </div>


          </div>
          <div className="forms">
            <div className="form-left">
              <p>Add an additional specie to Animalive:</p>
              <form>
                <div>
                  <label>Name</label>
                  <input></input>
                </div>
  
                <div>
                  <label>Email</label>
                  <input></input>
                </div>
  
                <div>
                  <label>Occupation</label>
                  <input></input>
                </div>
  
                <div>
                  <label>LinkedIn URL</label>
                  <input></input>
                </div>
  
                <div>
                  <label>Message</label>
                  <input></input>
                </div>
  
                <button>Submit</button>
              </form>
  
            </div>
            <div className="form-right">
              <p>Any other enquiries:</p>
              <form>
                <div>
                  <label>Name</label>
                  <input></input>
                </div>
  
                <div>
                  <label>Email</label>
                  <input></input>
                </div>
  
                <div>
                  <label>Message</label>
                  <input></input>
                </div>
  
                <button>Submit</button>
              </form>
            </div>
          
          </div>
        </div>
      </div>
    )
  }
}

export default Contact