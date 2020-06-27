/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '../utils/utils';

const styles = {
  wrapper: {
    height: '100vh',
    background: "white",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: '48px',
    // borderRadius: '4px',
    fontSize: '20px',
    textAlign: 'center',
    border: '0',
    borderRadius: '2px'
  },
  button: {
    margin: 'auto',
    padding: "12px 6px",
    background: 'black',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '10px',
    border: '0',
    borderRadius: '2px',
    // borderRadius: '4px',
    marginTop: '30px',
    // textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    cursor: 'pointer'
  },
  buttonHover: {
    background: 'goldenrod',
    color: 'black',
    fontWeight: 'bold'
  },
  link: {
    color: '#fff',
    fontFamily: 'sans-serif'
  },
  linkHover: {
    color: 'dodgerblue'
  }
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);
  const [isThemeHovered, themeHover] = useState(false);
  const [isSiteHovered, siteHover] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div
      id="pw-wrapper"
      style={{
        height: '100vh',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          width: '320px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null)
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          ~
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
