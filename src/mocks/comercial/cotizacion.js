import { mock } from 'src/utils/axios';

let cotiza = [
  {
    id: '221112',
    name: 'MINTIC',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    etapa:'CONCERTACION',
    probabilidad: '	0%',
    valor: '$10',
    origen:'Presencial',
    bitacira: '2022-08-20 10:01:44',
  },
  {
    id: '221108',
    name: 'INSTITUTO DISTRITAL DE PATRIMONIO CULTURAL',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    etapa:'PREVENTA',
    reqs:'',
    probabilidad: '	10%',
    valor: '$10',
    origen:'Comercial',
    bitacira: '2022-08-16 10:01:44',
    estado:'seguimasmásquidí',
    redt:1
  },
  {
    id: '221105',
    name: '	CARVAJAL TECNOLOGIA Y SERVICIOS S.A.S.',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    etapa:'PREVENTA',
    probabilidad: '	10%',
    valor: '$10',
    origen:'Fabricante',
    bitacira: '2022-08-16 10:01:44',
    estado:'Priori',
  },{
    id: '221103',
    name: 'MONITORINC SAS',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    etapa:'PREVENTA',
    probabilidad: '	10%',
    valor: '$ 120',
    origen:'Presencial',
    bitacira: '2022-08-16 10:01:44',
  },{
    id: '221100',
    name: 'ITAÚ CORPBANCA COLOMBIA S A',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    etapa:'PREVENTA',
    probabilidad: '	10%',
    valor: '$0',
    origen:'Presencial',
    bitacira: '2022-08-16 10:01:44',
    estado:'seguimasochodí'
  },
  {
    id: '221098',
    name: 'QUALA S.A.',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    etapa:'PREVENTA',
    probabilidad: '	50%',
    valor: '$10',
    origen:'Presencial',
    bitacira: '2022-08-16 10:01:44',
  },
  {
    id: '221097',
    name: 'UNIVERSIDAD DE LA SALLE',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    etapa:'PREVENTA',
    probabilidad: '	10%',
    valor: '$50',
    origen:'Presencial',
    bitacira: '2022-08-16 10:01:44',
    estado:'seguimenochodí'
  },
  {
    id: '221096',
    name: 'QUALA S.A.',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    etapa:'PREVENTA',
    probabilidad: '	10%',
    valor: '10%	',
    origen:'Presencial',
    bitacira: '2022-08-16 10:01:44',
    estado:'Priori',
  },
  {
    id: '221094',
    name: 'MINTIC',
    comercial: 'ARACELLY JANETH RIVERO',
    reqs:'',
    probabilidad: '	10%',
    valor: '$10',
    origen:'Presencial',
    etapa:'PREVENTA',
    bitacira: '2022-08-16 10:01:44',
    estado:'SinSegui'
  },
  {
    id: '221089',
    name: 'METRO DE MEDELLIN',
    comercial: 'ARACELLY JANETH RIVERO', 
    reqs:'',
    probabilidad: '	10%',
    valor: '$0',
    origen:'Comercial',
    bitacira: '2022-08-16 10:01:44',
    etapa:'PREVENTA',
    estado:'Priori',
  }
];

mock.onGet('/api/cotiza').reply(() => {
  try{
      return [200, { cotiza }]
  }catch(e){console.log(e)}
});