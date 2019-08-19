import React, { PureComponent } from 'react';
import styles from './styles.module.scss';
import Api from '../../api/api';

class Registration extends PureComponent {
  state = {
    firstName: '',
    secondName: '',
    lastName: '',
    position: '',
    email: '',
    password: '',
    login: '',
  };

  handleChangeEmail = (e) => {
    const email = e.target.value;
    this.setState({ email });
  };

  handleChangeSecondName = (e) => {
    const secondName = e.target.value;
    this.setState({ secondName });
  };

  handleChangeFirstName = (e) => {
    const firstName = e.target.value;
    this.setState({ firstName });
  };

  handleChangeLastName = (e) => {
    const lastName = e.target.value;
    this.setState({ lastName });
  };

  handleChangePosition = (e) => {
    const position = e.target.value;
    this.setState({ position });
  };

  handleChangeLogin = (e) => {
    const login = e.target.value;
    this.setState({ login });
  };

  handleAddNewUser = () => {
    const { firstName, secondName, lastName, position, email, password, login } = this.state;
    Api.registration(firstName, secondName, lastName, position, email, password, login)
      .then(() => {
        console.log('успешно');
      });

  };


  render() {
    return (
      <div>
        <div className={styles.input}>
          <label>login</label>
          <input type="text" onChange={this.handleChangeLogin} />
        </div>
        <div className={styles.input}>
          <label>Email</label>
          <input type="text" onChange={this.handleChangeEmail} />
        </div>
        <div className={styles.input}>
          <label>Фамилия</label>
          <input type="text" onChange={this.handleChangeSecondName} />
        </div>
        <div className={styles.input}>
          <label>Имя</label>
          <input type="text" onChange={this.handleChangeFirstName} />
        </div>
        <div className={styles.input}>
          <label>Отчество</label>
          <input type="text" onChange={this.handleChangeLastName} />
        </div>
        <div className={styles.input}>
          <label>Должность</label>
          <input type="text" onChange={this.handleChangePosition} />
        </div>
        <div className={styles.button_wrapper}>
          <button className={styles.button_send}
                  onClick={this.handleAddNewUser}>Зарегистрироваться
          </button>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {};

export default Registration;
