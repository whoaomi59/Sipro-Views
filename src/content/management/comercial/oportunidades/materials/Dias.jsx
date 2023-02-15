import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import useRefMounted from 'src/hooks/useRefMounted';

const Etapa = ({solinume}) =>{
    const isMountedRef = useRefMounted();
    const [data, setUsuarios] = useState([]);
    const getUsuarios = useCallback(async () => {
    let data ={solinume}
    try {
    const response = await axios.post(`/lisEtapOpor`,data);
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
    return (
        <>
        {data.map(data=>{
            return(
                <>
                <div className=''>{data.etapnomb}</div>
                </>
            )
        })}
        </>
    )
    
}
export default Etapa;