import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    graduationYear: '',
    experience: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number should be 10 digits';
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.major.trim()) newErrors.major = 'Major is required';
    if (!formData.graduationYear.trim()) newErrors.graduationYear = 'Graduation year is required';
    else if (!/^\d{4}$/.test(formData.graduationYear)) newErrors.graduationYear = 'Enter a valid year';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: errors.name ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.name && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0' }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: errors.email ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: errors.phone ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.phone && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0' }}>{errors.phone}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="university" style={{ display: 'block', marginBottom: '5px' }}>University</label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: errors.university ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.university && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0' }}>{errors.university}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="major" style={{ display: 'block', marginBottom: '5px' }}>Major</label>
          <input
            type="text"
            id="major"
            name="major"
            value={formData.major}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: errors.major ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.major && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0' }}>{errors.major}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="graduationYear" style={{ display: 'block', marginBottom: '5px' }}>Expected Graduation Year</label>
          <input
            type="text"
            id="graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: errors.graduationYear ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.graduationYear && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0' }}>{errors.graduationYear}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="experience" style={{ display: 'block', marginBottom: '5px' }}>Relevant Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: errors.experience ? '1px solid red' : '1px solid #ccc', minHeight: '100px' }}
          />
          {errors.experience && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0' }}>{errors.experience}</p>}
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit Application
        </button>
      </form>

      {submitStatus === 'success' && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#DFF2BF', color: '#4F8A10', borderRadius: '5px' }}>
          Your application has been submitted successfully!
        </div>
      )}

      {submitStatus === 'error' && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#FFBABA', color: '#D8000C', borderRadius: '5px' }}>
          Please correct the errors in the form and try again.
        </div>
      )}
    </div>
  );
};

export default Form;




