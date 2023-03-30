import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name === '' || email === '' || message === '') {
      alert('Please enter your name, email, and message.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Information submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className="container-xl">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Contact;
