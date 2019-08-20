import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import styles from './styles.module.scss';
import Api from '../../api/api';

class AddNewGame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      description: '',
      redir: false,
    };
  }

  handleChangeImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);


  }

  handleChangeName = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };


  handleChangeDescription = (e) => {
    const description = e.target.value;
    this.setState({ description });
  };

  handleAddGame = () => {
    const { name, description, imagePreviewUrl } = this.state;
    const lastUpdate = Date.now();
    const makeAddGame = () => {
      Api.addNewGame(name, lastUpdate, imagePreviewUrl, description)
        .then(() => {
          this.setState({ redir: true });
          this.props.hideModal();
        });
    };

    setTimeout(makeAddGame, 1000);
  };

  render() {
    const { name, image, description, redir, imagePreviewUrl } = this.state;
    return (
      !redir ?
        <div>
          <div className={styles.input}>
            <label>Наименование игры:</label>
            <input type="text" value={name} onChange={this.handleChangeName} />
          </div>
          <div className={styles.input}>
            <label>Картинка</label>
            <input
              className="fileInput"
              type="file"
              onChange={(e) => this.handleChangeImage(e)}
            />
            <img src={imagePreviewUrl} alt="" style={{
              width: '200px',
              heigth: '200px'
            }} />
          </div>
          <div className={styles.input}>
            <label>Описание:</label>
            <textarea
              cols="30"
              id=""
              name=""
              onChange={this.handleChangeDescription}
              rows="10"
              value={description} />
          </div>
          <div className={styles.button_wrapper}>
            <button className={styles.button_send} onClick={this.handleAddGame}>Добавить</button>
          </div>
        </div> :
        <Redirect to="/" />
    );
  }
}

AddNewGame.propTypes = {};

export default AddNewGame;
