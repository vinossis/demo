import React, { PureComponent } from 'react';
import styles from '../registration/styles.module.scss';
import Api from '../../api/api';

class Profile extends PureComponent {
  state = {
    loading: true,
    userInfo: {},
  };

  componentDidMount() {
    Api.getUserInfo()
      .then((data) => {
        this.setState({ userInfo: data });
        this.setState({ loading: false });
      }).catch((err)=>{
        console.log(err)
    });
  }

  render() {
    const { userInfo, loading } = this.state;
    return (
      !loading ?
        <div className={styles.add_new_game_wrapper}>
          <div className={styles.input}>
            <label>Email</label>
            <input disabled type="text" value={userInfo.email} />
          </div>
          <div className={styles.input}>
            <label>Фамилия</label>
            <input disabled type="text" value={userInfo.secondName} />
          </div>
          <div className={styles.input}>
            <label>Имя</label>
            <input disabled type="text" value={userInfo.firstName} />
          </div>
          <div className={styles.input}>
            <label>Отчество</label>
            <input disabled type="text" value={userInfo.lastName} />
          </div>
          <div className={styles.input}>
            <label>Должность</label>
            <input disabled type="text" value={userInfo.position} />
          </div>
        </div> :
        <div>Пользователь не авторизован</div>
    );
  }
}

Profile.propTypes = {};

export default Profile;
