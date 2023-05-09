import classes from './contact-form.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Notification from '../ui/notification';

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredName, setEnteredName] = useState();
  const [enteredMessage, setEnteredMessage] = useState();
  const [requestState, setRequestState] = useState(); // pending, success, error

  useEffect(() => {
    if (requestState) {
      const time = setTimeout(() => {
        setRequestState(null);
      }, 3000)
      return () => clearTimeout(time);
    }
  }, [requestState])

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setRequestState('pending');
    try {
      await axios.post('/api/contact',
        {
          email: enteredEmail,
          name: enteredName,
          message: enteredMessage
        },
        { headers: { 'Content-Type': 'application/json' } })
        .then(data => console.log(data))
      setRequestState('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      setRequestState('error');
    }
  }

  let notification;

  if (requestState === 'pending') {
    notification = {
      status: 'pending',
      title: '메세지 보내는 중...',
      message: 'Your message on its way!'
    }
  }
  if (requestState === 'success') {
    notification = {
      status: 'success',
      title: '보내기 완료!',
      message: 'Message sent successfully'
    }
  }
  if (requestState === 'error') {
    notification = {
      status: 'error',
      title: '문제가 생겼습니다.',
      message: 'Occured an error'
    }
  }

  return (
    <section className={classes.contact}>
      <h1>Contact</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={e => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={e => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={e => setEnteredMessage(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
      {notification
        && (<Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />)}
    </section>
  )
};

export default ContactForm;