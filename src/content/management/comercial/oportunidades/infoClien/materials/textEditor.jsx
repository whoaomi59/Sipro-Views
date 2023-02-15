import React,{useRef} from "react";
import JodiEditor from 'jodit-react';

const Editor = ({setHtml}) =>{
    const editor = useRef(null)
    return <JodiEditor ref={editor} onChange={(content) => setHtml(content)} value='PUNTOS NUEVOS RED Y ELECTRICO'/>
}
export default Editor;