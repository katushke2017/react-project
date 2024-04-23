import cn from 'classnames';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';

const clickBut = () => {
  console.log('hello');
};
const Header = () => {
  return (
    <>
      <Wrapper>
        <header className={cn(styles.header, styles.test)}>
          <Logo />
          <Navigation />
          {/* <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/registration">Registration</Link> */}

          <div className={styles.buttons}>
            <Button text={'Sing In'} onClick={clickBut}></Button>
            <Button text={'Sing Up'}></Button>
          </div>
        </header>
      </Wrapper>
    </>
  );
};

export default Header;
