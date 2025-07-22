import React, { useEffect, useState } from 'react';
import './Stdcontactus.css';
import { fetchStudentProfile, sendStudentMessage } from '../../../services/api';

const Stdcontactus = () => {
  const [message, setMessage] = useState('');
  const [student, setStudent] = useState({ fullName: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setFeedback('Authentication token not found.');
      setLoading(false);
      return;
    }

    fetchStudentProfile(token)
      .then((data) => {
        setStudent({
          fullName: data.fullName,
          email: data.email,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching student data:', err);
        setFeedback('Failed to load student information.');
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    setSubmitting(true);
    setFeedback('');

    // ✅ Prepend student role into the message
    const formattedMessage = `🎓 Message from Student\n\nMessage:\n${message}`;

    try {
      const res = await sendStudentMessage(token, student.fullName, student.email, formattedMessage);
      setFeedback(res.message || 'Message sent!');
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
      setFeedback('Failed to send message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="std-contact-container">
      {/* Left: Contact Form */}
      <div className="std-contact-card">
        <h2 className="std-contact-heading">Contact Admin Support</h2>

        {loading ? (
          <p>Loading student info...</p>
        ) : (
          <form className="std-contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" value={student.fullName} readOnly />
            </div>

            <div className="form-group">
              <label>Email ID:</label>
              <input type="email" value={student.email} readOnly />
            </div>

            <div className="form-group">
              <label>Message:</label>
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="submit-wrapper">
              <button type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Submit'}
              </button>
            </div>

            {feedback && <p className="feedback">{feedback}</p>}
          </form>
        )}
      </div>

      {/* Right: Contact Info */}
      <div className="std-contact-card contact-info-card">
        <h3>Contact Information</h3>
        <ul className="contact-info-list">
        <li><strong>Email:</strong> inf.campusconnect@gmail.com</li>
          <li><strong>Phone:</strong> +91 8767617675</li>
          <li><strong>Facebook:</strong> /campusconnect</li>
          <li><strong>LinkedIn:</strong> www.linkedin.com/in/amanmohane11050346</li>
          <li><strong>Instagram:</strong> @amanmohane11</li>
          <li><strong>Address:</strong> Nagpur Maharashtra, India</li>
        </ul>
      </div>
    </div>
  );
};

export default Stdcontactus;
