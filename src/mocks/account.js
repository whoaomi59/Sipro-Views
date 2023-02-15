import { mock } from 'src/utils/axios';
import wait from 'src/utils/wait';
import { sign, decode, JWT_SECRET, JWT_EXPIRES_IN } from 'src/utils/jwt';
import randomId from 'src/utils/randomId';

/*let users = [];
console.log(users);
var url = 'http://localhost:8080/Login';
fetch(url, {
  method: 'get',
}).then(res => res.json()).then((data) => {
  data.forEach(datos => {
  const user = 
    {
      'id': '1',
      'avatar': '',
      'location': datos.usuabarr,
      'username': 'admin',
      'email': datos.usuamper,
      'name': datos.usuanomb,
      'jobtitle': datos.usuacarg,
      'role': 'admin',
      'alias':datos.usuaalia,
      'password': datos.usuaclav,
      'posts': '27'
    };
    users.push(user)
  });
})*/
const users = [{
  'id': '1',
  'avatar': 'https://midia.gruposinos.com.br/_midias/jpg/2015/10/29/hacker_skull_and_crossbones-1145531.jpg',
  'location': '',
  'username': 'admin',
  'email': '',
  'name': 'JHON MARIO CHILITO',
  'jobtitle': 'DESARROLLADOR FULL STACK',
  'role': 'admin',
  'alias': 'JCHILITO',
  'password': '123',
  'posts': '27'
},
{
  'id': '2',
  'avatar': 'https://www.sipro.ingeal.com/documentos/rrhh/fotos/JMELENA.jpg',
  'location': '',
  'username': 'Trabajador',
  'email': '',
  'name': 'JAVIER ALEXEI MELENA YANZA',
  'jobtitle': 'DIRECTOR COMERCIAL',
  'role': 'Trabajador',
  'alias': 'CARLOS',
  'password': '1234',
  'posts': '27'
}
,
{
  'id': '3',
  'avatar': 'https://www.sipro.ingeal.com/documentos/rrhh/fotos/LRODRIGUEZ.jpg',
  'location': '',
  'username': 'Trabajador',
  'email': '',
  'name': 'LAURA XIMENA RODRÍGUEZ FARFÁN',
  'jobtitle': 'COORDINADORA COMERCIAL Y LICITACIONES',
  'role': 'Trabajador',
  'alias': 'LAURA',
  'password': '2003',
  'posts': '27'
}]


mock.onPost('/api/account/login').reply(async (config) => {
  await wait(1000);

  try {
    const { alias, password } = JSON.parse(config.data);
    /**CAMVIO DE NINUSCULAS A MAYUSCULAS toUpperCase()*/
    const user = users.find((_user) => _user.alias === alias.toUpperCase());

    if (!user || user.password !== password) {
      return [
        400,
        { message: 'Verify that your email and password are correct' }
      ];
    }

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          jobtitle: user.jobtitle,
          email: user.email,
          name: user.name,
          location: user.location,
          username: user.username,
          role: user.role,
          alias:user.alias,
          posts: user.posts
        }
      }
    ];
  } catch (err) {
    console.log(err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onPost('/api/account/register').reply(async (config) => {
  await wait(1000);

  try {
    const { email, name, password } = JSON.parse(config.data);

    let user = users.find((_user) => _user.email === email);

    if (user) {
      return [400, { message: 'This user already exists' }];
    }

    user = {
      id: randomId(),
      avatar: null,
      jobtitle: 'Lead Developer',
      email,
      username: null,
      name,
      password,
      location: null,
      role: 'admin',
      posts: '56'
    };

    users.push(user);

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          jobtitle: user.jobtitle,
          email: user.email,
          name: user.name,
          location: user.location,
          username: user.username,
          role: user.role,
          posts: user.posts
        }
      }
    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onGet('/api/account/personal').reply((config) => {
  try {
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Auth token is missing' }];
    }

    const accessToken = Authorization.split(' ')[1];
    const { userId } = decode(accessToken);
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid auth token' }];
    }

    return [
      200,
      {
        user: {
          id: user.id,
          avatar: user.avatar,
          jobtitle: user.jobtitle,
          email: user.email,
          name: user.name,
          location: user.location,
          username: user.username,
          role: user.role,
          posts: user.posts,
          alias: user.alias
        }
      }
    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});
