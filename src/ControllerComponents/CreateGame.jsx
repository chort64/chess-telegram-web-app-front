import React from 'react'
import { useNavigate } from 'react-router-dom';
import { createGame } from '../Controller/controller'

export default function CreateGame() {
    const id = createGame();
    const navigate = useNavigate();
    id.then(res => navigate("/game/" + res));
}
