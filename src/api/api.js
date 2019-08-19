import {IMG1,IMG2,IMG3} from './images';
const API_ERROR = {
  INVALID_LOGIN_OR_PASSWORD: 1,
  USER_NOT_AUTH: 2,
};

const ALL_USERS = [
  {
    firstName: '123',
    secondName: '123',
    lastName: '123',
    position: '123',
    email: '123',
    password: '123',
    login: 'log',
  }, {
    firstName: '6666123',
    secondName: '6666123',
    lastName: '6666123',
    position: '6666123',
    email: '6666123',
    password: '6666123',
    login: 'log1',
  }, {
    firstName: 'yyyyyy',
    secondName: 'yyyyyy',
    lastName: 'yyyyyy',
    position: 'yyyyyy',
    email: 'yyyyyy',
    password: 'yyyyyy',
    login: 'logyyy',
  }, {
    firstName: '777777',
    secondName: '777777',
    lastName: '777777',
    position: '777777',
    email: '777777',
    password: '123',
    login: 'pas',
  },
];
let CURRENT_USER;

const allPost = [
  {
    name: 'POKER',
    lastUpdate: 1566128258977,
    image: IMG1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, amet aperiam commodi delectus, dignissimos distinctio id illum ipsam necessitatibus quidem reprehenderit sunt tenetur vel! Corporis hic in saepe sed vel?',
  }, {
    name: 'GTA',
    lastUpdate: 1336108258977,
    image: IMG3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, amet aperiam commodi delectus, dignissimos distinctio id illum ipsam necessitatibus quidem reprehenderit sunt tenetur vel! Corporis hic in saepe sed vel?',
  }, {
    name: 'FOOTBALL',
    lastUpdate: 1560128258977,
    image: IMG2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, amet aperiam commodi delectus, dignissimos distinctio id illum ipsam necessitatibus quidem reprehenderit sunt tenetur vel! Corporis hic in saepe sed vel?',
  },
];

class Api {
  async auth(login, password) {
    const id = ALL_USERS.find((el) => {
      if (el.login === login && el.password === password) {
        CURRENT_USER = el;
        return el;
      }
    });

    if (id === undefined) {
      throw API_ERROR.INVALID_LOGIN_OR_PASSWORD;
    }
    console.log(CURRENT_USER);
  }

  async registration(firstName, secondName, lastName, position, email, password, login) {
    ALL_USERS.push({
      firstName,
      secondName,
      lastName,
      position,
      email,
      password,
      login,
    });
  }

  async addNewGame(name, lastUpdate, image, description) {
    allPost.push({
      name,
      lastUpdate,
      image,
      description,
    });

    console.log(allPost)
  }

  async getUserInfo() {
    if (CURRENT_USER) {
      return CURRENT_USER;
    } else {
      throw API_ERROR.USER_NOT_AUTH
    }
  }

  async getCurrentGame(id) {
    return allPost[id]
  }

  async getAllData() {
    return allPost;
  }
}

const api = new Api();
export default api;
