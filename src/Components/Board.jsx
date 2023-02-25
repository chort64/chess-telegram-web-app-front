import React, { Component } from 'react'
import { useState } from 'react';
import { Cell } from './Cell';
import '../Styles/Row.css'
import '../Styles/Board.css'
import { getField, makeMove, possibleMoves } from '../Controller/controller';
import { useParams } from 'react-router-dom';

export function Board() {

    const {id} = useParams();
    const {color} = useParams();
    const [coordinates, setCoordinates] = useState([]);
    const [whoMove, setWhoMove] = useState(1);
    const [board, setBoard] = useState([]);
    const [reloaded, setReloaded] = useState(true);
    const [connectedToBlack, setConnectedToBlack] = useState(color == "b" ? true : false);

    function updateBoard() {
        if (reloaded) {
            getField(id).then(res => {
                if (connectedToBlack) {
                    setBoard(res.field.reverse());
                } else {
                    setBoard(res.field);
                }
                setWhoMove(res.whoMove);
            })
            setReloaded(false);
        }
    }

    updateBoard();

    function clickCell(newCoordinates) {
        if (coordinates.length === 0) {
            setCoordinates(newCoordinates);
            var moves = possibleMoves(id, newCoordinates[0], newCoordinates[1]);
            moves.then(res => {
                if (connectedToBlack) {
                    setBoard(res.field.reverse())
                }
                else {
                    setBoard(res.field)
                }
            })
        }
        else {
            var field = makeMove(id, coordinates[0], coordinates[1]
                                       , newCoordinates[0], newCoordinates[1]);
            field.then(res => {
                if (connectedToBlack) {
                    setBoard(res.field.reverse())
                }
                else {
                    setBoard(res.field)
                }
                setWhoMove(res.whoMove);
            });
            setCoordinates([]);
        }
    }

    return (
        <div className='board'>
            {board.map((row, rowIndex) =>
                <div className='row' key={rowIndex}>
                    {row.map((cell, cellIndex) => 
                        <Cell number={cell} rowIndex={connectedToBlack ? 7 - rowIndex : rowIndex} cellIndex={connectedToBlack ? cellIndex : cellIndex} key={cellIndex} 
                        onClick={() => 
                            (cell > 0 && whoMove > 0) || (cell < 0 && whoMove < 0) 
                            || coordinates.length > 0 ? clickCell([ connectedToBlack ? 7 - rowIndex : rowIndex
                                                                  , connectedToBlack ? cellIndex : cellIndex ])
                                                      : console.log('пусто')
                        } 
                        />
                    )}
                </div>
            )}
        </div>
    )
}
