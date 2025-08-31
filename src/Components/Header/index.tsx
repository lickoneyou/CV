import React from 'react';

import './styles.css';

const Header = () => {
  return (
    <header>
      <div className={'myPhoto'} />
      <div className={'contactsWrapper'}>
        <div>
          <h1>Kiryl Khomchanka</h1>
          <h3>Front-End Web Developer</h3>
        </div>
        <div className={`${'dispFlex'} ${'contacts'}`}>
          <div className={`${'dispFlex'} ${'contactsEmail'}`}>
            <img
              className={'contactsIcon'}
              src="./images/icons/mail.png"
              alt="emailIcon"
            />
            <p>dickdurex265@gmail.com</p>
          </div>
          <div className={`${'dispFlex'} ${'contactsPhone'}`}>
            <img
              className={'contactsIcon'}
              src="./images/icons/phone.png"
              alt="phoneIcon"
            />
            <p>+375 (29) 562 82 80</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
