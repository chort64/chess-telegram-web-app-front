const url = "http://localhost:8080/game"

export async function updateStatusGame(gameId, playerLogin){
    const data = {gameId, playerLogin}
    const {id, field, yourColor} = await fetch(url + "/updateStatusGame", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    return {field, yourColor};
}   

export async function makeMove(gameId, playerLogin, newX, newY, oldX, oldY) {
    const data = {gameId, playerLogin, newX, newY, oldX, oldY};
    const {field, gameID, whoseMove} = await fetch(url + "/makeMove", {
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

export async function possibleMoves(id, playerLogin, x, y) {
    const data = {id, playerLogin, x, y};
    const array = await fetch(url + "/getPossibleMoves", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json());

    return array;
}