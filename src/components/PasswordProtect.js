/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '../utils/utils';

const styles = {
  wrapper: {
    height: '100vh',
    background: '#2e8b57',
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
    borderRadius: '6px'
  },
  button: {
    margin: 'auto',
    width: '70%',
    height: '48px',
    background: 'rebeccapurple',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '14px',
    border: '0',
    borderRadius: '20px',
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
    // var elem = document.getElementById('gatsby-focus-wrapper').childNodes[0];
    // elem.removeAttribute('style');
  };

  return (
    <div
      id="pw-wrapper"
      style={{
        height: '100vh',
        background: '#2e8b57',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1 style={{ color: '#fff', marginBottom: '0px', paddingBottom: '0px' }}>
        Secret post
      </h1>
      <h4 style={{ color: '#fff' }}>Password?</h4>

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
          Enter!
        </button>
      </form>

      {/* <a
        href="https://gitlab.com/mkit/open-source/gatsby-theme-password-protect#readme"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...styles.link,
          ...(isThemeHovered ? styles.linkHover : null)
        }}
        onMouseEnter={() => themeHover(true)}
        onMouseLeave={() => themeHover(false)}
      >
        gatsby-theme-password-protect
      </a> */}
      {/* <a
        href="https://mkit.io"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...styles.link,
          ...(isSiteHovered ? styles.linkHover : null)
        }}
        onMouseEnter={() => siteHover(true)}
        onMouseLeave={() => siteHover(false)}
      >
        MK IT
      </a> */}
    </div>
  );
};

export default PasswordProtect;
