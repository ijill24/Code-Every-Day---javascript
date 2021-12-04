const team = {
    _players: [
      {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
      {firstName: 'Dan', lastName: 'Marshall', age: 12},
      {firstName: 'Jaime', lastName: 'Dixon', age: 13}
    ],
    _games: [
      {opponent: 'Phillies', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Aggies', teamPoints: 24, opponentPoints: 30},
      {opponent: 'Sharks', teamPoints: 40, opponentPoints: 25}
    ],
   
    get players(){
      return this._players;
    },
   
    get games(){
      return this._games;
    },
   
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
   
      this.players.push(player)
    },
   
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      //console.log(this._games);
      this.games.push(game);
    }
   };
   
   team.addPlayer('Steph', 'Curry', 28);
   team.addPlayer('Lisa', 'Leslie', 44);
   team.addPlayer('Bugs', 'Bunny', 76);
   
   console.log(team._players);
   
   team.addGame('Flyers', 25, 36);
   team.addGame('Froot Loops', 20, 51);
   team.addGame('Snowmen', 52, 42);
   
   console.log(team._games);