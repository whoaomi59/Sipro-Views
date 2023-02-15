import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import useRefMounted from 'src/hooks/useRefMounted';

const Oferta = ({id}) =>{
    const isMountedRef = useRefMounted();
    const [data, setUsuarios] = useState([]);
    const getUsuarios = useCallback(async () => {
    let data ={id}
    try {
    const response = await axios.post(`/ListEstado`,data);
    if (isMountedRef.current) {
    setUsuarios(response.data);
    }
    } catch (err) {
    console.error(err);
    }
    }, [isMountedRef]);
    useEffect(() => {
    getUsuarios();
    }, [getUsuarios]);

    const Valida = ({val})=>{
        if(val=1){return <a>Cotización</a>}
    }

    return (
        <>
        {data.map(data=>{
            return(
                <>
                <div className='verdeBack borLet ty1  positio-absol z-index colWithe'>{Valida(data.soliopor)}</div>
                </>
            )
        })}
        </>
    )
    
}
export default Oferta;