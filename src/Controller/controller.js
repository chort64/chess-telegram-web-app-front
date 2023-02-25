const url = "http://localhost:8080/game"

export async function createGame(){
    const {id, field} = await fetch(url + "/createGame", {
        method: "POST",
        headers: {"Content-Type":"application/json"}
    })
    .then(res => res.json())

    return id;
}   

export async function makeMove(id, oldX, oldY, newX, newY){
    const data = {id, oldX, oldY, newX, newY};
    const field = await fetch(url + "/makeMove", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.status >= 200 && res.status < 300){
            return res;
        } else {
            let error = new Error('Неверный шаг брат');
            throw error;
        }
    })
    .then(res => res.json())
    .catch();

    return field;
}   

export async function possibleMoves(id, x, y) {
    const data = {id, x, y};
    const array = await fetch(url + "/getPossibleMoves", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json());

    return array;
}

export async function getField(gameId) {
    const data = {gameId};
    const field = await fetch(url + "/getField", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())

    return field;
}

export async function connectToWhite(gameId, login) {
    const data = {gameId, login};
    const response = await fetch(url + "/connectToWhite", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}

export async function connectToBlack(gameId, login) {
    const data = {gameId, login};
    const response = await fetch(url + "/connectToBlack", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}