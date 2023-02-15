import { mock } from 'src/utils/axios';
//perfil del usuario
var url = 'http://localhost:8080/Lista';
fetch(url, {
  method: 'get',
}).then(res => res.json()).then((data) => {
  app(data)
})
function app(datos){
  let users = [];
  datos.forEach(data => {
  let user = 
    {
      'id': data.usuacodi,
      'alias': data.usuaalia,
      'NumDo': data.usuanitcc,
      'CorrCor':data.usuamail,
      'numCorp':data.usuacelu,
      'exten':data.usuaexte,
      'JefeInm':'AMANDA I ALFONSO VELASQUEZ',
      'DirecPro':'AMANDA I ALFONSO VELASQUEZ',
      'avatar': '/static/images/placeholders/covers/1.pn',
      'nombre': data.usuanomb,
      'description':  '',
      'email': data.usuamper,
      'cargo': data.usuacarg,
      'contrato': data.TipoCon,
      'FechaI': data.FeInicotra,
      'FechaF': data.fechaFinalInicial,
      'nomAcu': data.usuapcon,
      'role': 'admin',
      'coverImg': '/static/images/placeholders/covers/1.png',
     
    }
   users.push(user)
  });
  mock.onGet('/api/users').reply(() => {
  return [200, { users }];
  });
  mock.onGet('/api/user').reply((config) => {
    const { userId } = config.params;
    const user = users.find((_user) => _user.id == userId);
    return [200, { user }];
  });
  
}





