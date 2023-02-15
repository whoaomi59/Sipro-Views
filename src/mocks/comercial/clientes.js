import { mock } from 'src/utils/axios';
var cliente = [
    {
        usuacodi:'00022',
        cliente:'ZTE COLOMBIA S A S',
        nit:'900466896-7',
        fechCreac:'	21/09/2018 01:08 p.m.',
        ciudad:'Bogotá D.C',
        segme:'ENERGIA ELECTRICA',
        clasificacion:'Activo',
        comerActi:'ARACELLY JANETH RIVERO',
        comerInact:'JAIRO QUINTERO OROZCO',
        direcc:'Carrera 28 B 84 05',
        teFono:'622 27 70',
        fax:'622 27 70',
        email:'contabilidad@abcstockimagenes.com'
     },
     {
        usuacodi:'00023',
        cliente:'ABC STOCK IMAGENES LTDA - EN LIQUIDACION',
        nit:'800221434-3',
        fechCreac:'21/09/2018 01:08 p.m.',
        ciudad:'Medellín',
        segme:'SERVICIOS',
        clasificacion:'Activo',
        comerActi:'',
        comerInact:'',
        teFono:'622 27 70'
     },
     {
      usuacodi:'00020',
      cliente:'CENTRO DE DIAGNÓSTICO AUTOMOTOR DEL VALLE LTDA',
      nit:'900466896-0',
      fechCreac:'	21/09/2018 01:08 p.m.',
      ciudad:'Cali',
      segme:'SERVICIOS',
      clasificacion:'Activo',
      comerActi:'ARACELLY JANETH RIVERO',
      comerInact:'RODRIGO ARMANDO DIAZ ALEY',
      teFono:'622 27 70'
   },
];


mock.onGet('/api/clintes').reply((config) => {
   const { userId } = config.params;
   const detalle = cliente.find((_user) => _user.usuacodi == userId);
   try{return [200, { detalle }];}catch(e){console.log(e)}
   
});
mock.onGet('/api/clinte').reply(() => {
   try{
      return [200, { cliente }]
   }catch(e){console.log(e)}
   
});

 
