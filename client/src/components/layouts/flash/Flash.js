import React from 'react'
import {Alert} from 'react-bootstrap';

const Flash = ({show,msg,variant}) => {
    const flash = show ?
    (<Alert variant={variant}>{msg.toUpperCase()}</Alert>) :(<span></span>);
   

    return (
     <div>
            {flash}
     </div>
    )
}

export default Flash
