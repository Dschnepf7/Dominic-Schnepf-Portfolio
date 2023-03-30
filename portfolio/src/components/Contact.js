import React from 'react';

function Contact() {
  return (
    <div class="container-xl ">
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
      <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
    <button type="button" class="btn btn-primary">Submit</button>
    </div>
  )
}

export default Contact;
