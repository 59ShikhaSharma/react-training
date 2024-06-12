import React, { useState } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Reactstate = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
     
      if (formData.username && formData.email && formData.password) {
        setSuccess(true);
      } else {
        setError('Please fill in all fields.');
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input 
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              disabled={loading} 
            />
          </label>
          <br />
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              disabled={loading} 
            />
          </label>
          <br />
          <label>
            Password:
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              disabled={loading} 
            />
          </label>
          <br />
          <button type="submit" disabled={loading || !formData.username || !formData.email || !formData.password}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      ) : (
        <p>Thank you!</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default Reactstate;
