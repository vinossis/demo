import React, { PureComponent } from 'react';
import styles from './styles.module.scss';
import Api from '../../api/api';

class FullDescriptionGame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      game: {},
    };
  }

  componentDidMount() {
    Api.getCurrentGame(this.props.match.params.id)
      .then((game) => {
        this.setState({
          game,
          loading: false
        });
      });
  }

  render() {
    const {
      game, loading
    } = this.state;

    console.log(this.props);
    console.log(this.state.game);
    return (
      !loading ?
        <div className={styles.add_new_game_wrapper}>
          <div className={styles.input}>
            <label>Наименование игры:</label>
            <input disabled type="text" value={game.name} />
          </div>
          <div className={styles.input}>
            <label>Лого</label>
            <input disabled type="text" value={game.image} />
          </div>
          <div className={styles.input}>
            <label>Дата</label>
            <input disabled type="text" value={game.lastUpdate} />
          </div>
          <div className={styles.input}>
            <label>Описание:</label>
            <textarea
              cols="30"
              disabled
              id=""
              name=""
              rows="10"
              value={game.description}
            />
          </div>
        </div> :
        <div>загрузка...</div>
    );
  }
}

FullDescriptionGame.propTypes = {};

export default FullDescriptionGame;
