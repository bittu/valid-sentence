import { useState } from 'react';
import './App.css';
import { validate } from './validate';

function App() {
  const [sentence, setSentence] = useState('');
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(null);

  function handleOnChange(event) {
    setStatus(null);
    const val = event.target.value;
    setSentence(val);
    if (val) {
      setError(false);
    }
  }

  function validateSentence() {
    setStatus(null);
    if (!sentence) {
      setError(true);
      return;
    }
    setStatus(validate(sentence));
  }

  return (
    <main className="container">
      <section>
        <label htmlFor="sentence">Validate a sentence <span>( Press &crarr; to validate )</span></label>
        <div className={`input ${status !== null && ( status ? ' valid' : ' invalid')}`}>
          <input
            id="sentence"
            name="sentence"
            type="text"
            autoFocus
            value={sentence}
            onChange={handleOnChange}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                validateSentence();
              }
            }}
          />
        </div>
        <span className={`errorMessage${error ? ' show' : ''}`}>Please enter sentence to validate</span>
      </section>
    </main>
  )
}

export default App
