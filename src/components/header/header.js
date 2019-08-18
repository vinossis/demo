import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Header = props => {
  return (
    // eslint-disable-next-line react/jsx-fragments
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>Игровая платформа</div>
        <div className={styles.header_profile}>
          <div>Пользователь</div>
        </div>
      </div>
      <div className={styles.header_add_new_game}>
        <button>Добавить игру</button>
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
