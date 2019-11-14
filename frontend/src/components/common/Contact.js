import React from 'react'


class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact Page</h1>
        <p>To contact us to add additional species to Animalive, click here:</p>
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

          <div>
            <label>Images</label>
            <input></input>
          </div>

          <button>Submit</button>
        </form>


        <p>To drop us a message for anything else, click here:</p>
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
    )
  }
}

export default Contact