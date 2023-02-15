import { mock } from 'src/utils/axios';

let products = [
  {
    id: '1',
    name: 'Jhon Mario',
    tipo: 'Licencia NO Remunerada',
    tiempo:'48 Horas',
    fechaDes: '2022-08-16 07:30:00',
    fechaHas: '2022-08-18 07:30:00',
    jefeAre:
      'Aprobado por: ARROJAS',
    dirAdmi: 
    'Aprobado por: AALFON'
    ,
  }
];

mock.onGet('/api/products').reply(() => {
  return [200, { products }];
});

mock.onGet('/api/product').reply((config) => {
  const { productId } = config.params;
  const product = products.find((_product) => _product.id === productId);

  return [200, { product }];
});
