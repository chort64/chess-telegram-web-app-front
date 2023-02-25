import React from 'react'
import { useNavigate } from 'react-router-dom';
import { connectToBlack } from '../Controller/controller'

export default function ConnectToBlack(props) {
    const response = connectToBlack(props.id, props.login);
    const navigate = useNavigate();
    response.then(res => navigate("/game/" + props.id + "/b"));
}
