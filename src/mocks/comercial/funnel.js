import { mock } from 'src/utils/axios';

var prospecto = [
    {
        id:'21314',
        cliente:'ZIX COLOMBIA SAS',
        comercial:'RACELLY JANETH RIVERO',
        factura:'$338.169,08',
    },
    {
        id:'21314',
        cliente:'ZIX COLOMBIA SAS',
        comercial:'RACELLY JANETH RIVERO',
        factura:'$338.169,08',
    },
    {
        id:'21314',
        cliente:'ZIX COLOMBIA SAS',
        comercial:'RACELLY JANETH RIVERO',
        factura:'$338.169,08',
    },
    {
        id:'21314',
        cliente:'ZIX COLOMBIA SAS',
        comercial:'RACELLY JANETH RIVERO',
        factura:'$338.169,08',
    },
    {
        id:'21314',
        cliente:'ZIX COLOMBIA SAS',
        comercial:'RACELLY JANETH RIVERO',
        factura:'$338.169,08',
    },
    {
        id:'21314',
        cliente:'ZIX COLOMBIA SAS',
        comercial:'RACELLY JANETH RIVERO',
        factura:'$338.169,08',
    },
    {
        id:'21314',
        cliente:'ZIX COLOMBIA SAS',
        comercial:'RACELLY JANETH RIVERO',
        factura:'$338.169,08',
    },
];
var oportunidades =[
    {
        'id':'21314',
        'empresa':'MINISTERIO DE COMERCIO, INDUSTRIA Y TURISMO',
        'valor':'$10',
        'fechaCierre':'2022-12-31',
        'probabi':'10%',
        'etapa':'PREVENTA',
        'valEspe':'$1',
        'FUAccio':'2022-08-26 16:44:50',
        'diaDifere':'4',
    }]


var cotizacion = [
    {
        id:'21314',
        empresa:'AZUL K SAS',
        valor:'$10',
        fechaCierre:'2022-12-31',
        probabi:'10%',
        etapa:'PREVENTA',
        valEspe:'$ 125.000',
        FUAccio:'2022-08-26 16:44:50',
        diaDifere:'1',
    },
    {
        id:'221122',
        empresa:'METROKIA S.A.',
        valor:'$ 250.000',
        fechaCierre:'2022-09-30',
        probabi:'10%',
        etapa:'COTIZACION',
        valEspe:'$ 25.000',
        FUAccio:'2022-08-29 07:44:28',
        diaDifere:'1',
    }
]
var facturas =[
    {
        id:'220223',
        empresa:'GRUPO GERDAU DIACO S.A.',
        requisicion:'222303',
        factura:'1792',
        fechFactura:'18/08/2022',
        fechComercial:'16/08/2022',
        valSeguComer:'$ 296.244,00',
        valFacturado:'$ 296.243'
    },
    {
        id:'220221',
        empresa:'UNIVERSIDAD DE ANTIOQUIA',
        requisicion:'222271',
        factura:'',
        fechFactura:'',
        fechComercial:'09/03/2023',
        valSeguComer:'$ 6.500.252,50',
        valFacturado:'$0'
    }
]
mock.onGet('/api/prospecto').reply(() => {
    var pros = prospecto;
    return [200, { pros }]
});
mock.onGet('/api/oport').reply(() => {
    var opor = oportunidades;
    try{
        return [200, { opor }]
    }catch(e){console.log(e)}
});
mock.onGet('/api/cotizacion').reply(() => {
    var cotiz = cotizacion;
    try{
        return [200, { cotiz }]
    }catch(e){console.log(e)}
});
mock.onGet('/api/facturas').reply(() => {
    var factu = facturas;
    try{
        return [200, { factu }]
    }catch(e){console.log(e)}
});