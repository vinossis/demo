import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Modal from '../modal/modal';
import AddNewGame from '../addNewGame/addNewGame';
import Auth from '../auth/auth';
import Registration from '../registration/registration';


class Header extends PureComponent {
  state = {
    addNewGame: false,
    authForm: false,
    registration: false,
    isAuth: false,
  };

  handleAuthComplete = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };

  handleChangeModal = () => {
    this.setState({ addNewGame: !this.state.addNewGame });
  };

  handleAuthModal = () => {
    this.setState({ authForm: !this.state.authForm });
  };

  handleRegistrationModal = () => {
    this.setState({ registration: !this.state.registration });
  };

  handleLogout = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };

  render() {
    const { addNewGame, authForm, registration, isAuth } = this.state;
    return (
      <>
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}><Link to='/'>Игровая платформа</Link></div>
          {!isAuth ?
            <div className={styles.header_profile_not_auth}>
              <div>
                <button className={styles.button_send} onClick={this.handleAuthModal}>Авторизоваться
                </button>
              </div>
              <div>
                <button
                  className={styles.button_send}
                  onClick={this.handleRegistrationModal}>Регистрация
                </button>
              </div>
            </div> :
            <div className={styles.header_profile}>
              <Link to="/profile">
                Профиль
              </Link>
              <button className={styles.button_logout} onClick={this.handleLogout}>Выйти</button>
            </div>
          }
        </div>
        <div className={styles.header_add_new_game}>
          <button disabled={!isAuth} onClick={this.handleChangeModal}>Добавить игру</button>
        </div>

        {
          addNewGame && isAuth ?
            <Modal onCloseModal={this.handleChangeModal}>
              <AddNewGame
                hideModal={this.handleChangeModal}
              />
            </Modal> : null
        }
        {
          authForm ?
            <Modal onCloseModal={this.handleAuthModal}><Auth
              handleAuthComplete={this.handleAuthComplete}
              hideModal={this.handleAuthModal} /></Modal> : null
        }

        {
          registration
            ? <Modal onCloseModal={this.handleRegistrationModal}><Registration
              registration={registration} /></Modal> : null
        }
      </>);
  }
}


export default Header;
