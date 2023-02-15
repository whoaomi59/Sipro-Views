import React,{useRef} from "react";
import JodiEditor from 'jodit-react';

const Editor = ({setHtml}) =>{
    const editor = useRef(null)
    return <JodiEditor ref={editor} onChange={(content) => setHtml(content)}/>
}
export default Editor;