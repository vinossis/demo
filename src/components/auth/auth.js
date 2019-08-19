import React, { PureComponent } from 'react';
import styles from './styles.module.scss';
import Api from '../../api/api';

class Auth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      disableLoginBtn: false,
      errorLogin: false,
    };
  }

  handleChangeLogin = (e) => {
    const login = e.target.value;
    this.setState({ login });
  };

  handleChangePassowrd = (e) => {
    const password = e.target.value;
    this.setState({ password });
  };

  handleAuthBtnClick = () => {
    const { login, password } = this.state;
    this.setState({ disableLoginBtn: true });

    const makeAuth = () => {
      Api.auth(login, password)
        .then(() => {
          console.log('авторизация прошла успешно');
          this.setState({
            disableLoginBtn: false,
            errorLogin: false,
          });
          this.props.hideModal();
          this.props.handleAuthComplete();

        })
        .catch((e) => {
          console.log('ошибка авторизации');
          this.setState({
            disableLoginBtn: false,
            errorLogin: true,
          });
        });
    };

    setTimeout(makeAuth, 500);

  };

  render() {
    const { login, password, errorLogin } = this.state;
    return (
      <div>
        <div className={styles.input}>
          <label>Логин</label>
          <input
            onChange={this.handleChangeLogin}
            type="text"
            value={login}
          />
        </div>
        <div className={styles.input}>
          <label>Пароль</label>
          <input onChange={this.handleChangePassowrd} type="text" value={password} />
        </div>
        <div className={styles.button_wrapper}>
          <button className={styles.button_send} onClick={this.handleAuthBtnClick}>Добавить</button>
        </div>
        {
          errorLogin ? <div>Неверный логин или пароль</div> : null
        }
      </div>
    );
  }
}

Auth.propTypes = {};

export default Auth;
