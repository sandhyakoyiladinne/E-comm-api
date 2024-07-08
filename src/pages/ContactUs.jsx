// import { useState } from 'react';
// import '../css/ContactUs.css'; 

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted', formData);
//   };

//   return (
//     <div className="contact-container">
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;


import { useState } from 'react';
import '../css/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        if (isEditing) {
          const updatedDataList = submittedDataList.map((data, index) =>
            index === editIndex ? formData : data
          );
          setSubmittedDataList(updatedDataList);
          setIsEditing(false);
          setEditIndex(null);
        } else {
          setSubmittedDataList([...submittedDataList, formData]);
        }
        setStatus('Form submitted successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Form submission failed');
    }
  };

  const handleEdit = (index) => {
    setFormData(submittedDataList[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedDataList = submittedDataList.filter((_, i) => i !== index);
    setSubmittedDataList(updatedDataList);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
      </form>

      {submittedDataList.length > 0 && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          {submittedDataList.map((data, index) => (
            <div key={index} className="submitted-item">
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Message:</strong> {data.message}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactUs;

