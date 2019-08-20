import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Api from '../../api/api';

class Games extends PureComponent {
  state = {
    addNewGame: false,
    data: [],
    loading: true,
    isHovered: {},
  };

  componentDidMount() {
    Api.getAllData()
      .then((data) => {
        this.setState({ games: data });
        this.setState({ loading: false });
      });
  }

  handleMouseEnter = (index) => {
    this.setState(prevState => ({
      isHovered: {
        ...prevState.isHovered,
        [index]: true,
      }
    }));
  };

  handleMouseLeave = (index) => {
    this.setState(prevState => ({
      isHovered: {
        ...prevState.isHovered,
        [index]: false,
      },
    }));
  };


  render() {
    const { games, loading, isHovered } = this.state;
    return (
      <div>
        {
          !loading ?
            <div className={styles.content}>
              {games.map((item, key) => (
                <div
                  key={key}
                  className={styles.content_item}
                  onMouseEnter={() => this.handleMouseEnter(key)}
                  onMouseLeave={() => this.handleMouseLeave(key)}
                >
                  <div className={styles.img}>
                    <img src={item.image} alt="" style={{
                      width: '200px',
                      heigth: '200px'
                    }} />
                  </div>
                  <div>
                    <p>
                      <Link style={{ textDecoration: 'none' }} to={`/game/${key}`}>
                        <span className={styles.game_name}>{item.name}</span>
                      </Link>
                    </p>
                    <p>
                      <span>Добавлено {new Date(item.lastUpdate).toLocaleString('eu')}</span>
                    </p>
                  </div>
                  {
                    isHovered[key] ?
                      <div>
                        <p>
                          Описание:
                        </p>
                        {item.description}
                      </div> : null
                  }
                </div>
              ))}
            </div> : null
        }
      </div>
    );
  }
}

export default Games;
