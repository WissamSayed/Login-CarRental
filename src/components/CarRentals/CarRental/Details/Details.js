import React from "react";
import { useParams } from "react-router-dom";
import Toolbar from "../../../Toolbar/Toolbar";

const Details =()=>{

    const params = useParams();

    return(
        <div>
        <header><Toolbar/></header> 
        <p1>hieee: {JSON.stringify(params)}</p1>
        </div>
    )
}


export default Details;