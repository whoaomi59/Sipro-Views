import { mock } from 'src/utils/axios';

var data =[
    {
        nit:'PORESPECIFICAR1',
        cliente:'DEFENSORIA DEL ESPACIO PUBLICO',
        comercial:'Competidor',
        NomComer:'ENOC MOREA VELANDIA'
    },
    {
        nit:'PORESPECIFICAR',
        cliente:'INNOTIK',
        comercial:'	Usuario Final',
        NomComer:''
    },
    {
        nit:'PERSONANATURAL',
        cliente:'MARTIN HORKLEY',
        comercial:'	Usuario Final',
        NomComer:'ARACELLY JANETH RIVERO'
    },
]

mock.onGet('/api/consulComer').reply(() => {
    console.log(data);
    try{
        return [200, { data }]
    }catch(e){console.log(e)}
});