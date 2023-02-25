import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connectToWhite } from '../Controller/controller';

export default function ConnectToWhite(props) {
    const response = connectToWhite(props.id, props.login);
    const navigate = useNavigate();
    response.then(res => navigate("/game/" + props.id));
}
