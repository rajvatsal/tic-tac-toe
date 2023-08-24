const ticTacToe = (function() {

    function _render(e) {
        if( !e.target.textContent == '' || e.target.classList.contains('container')) return
        e.target.textContent = this.sign();
        this.switchTurn();
    }

    const _Gameboard = {
        gameBoard: ['X', 'O'],
        turn: 0,
        switchTurn: function() {
            if(this.turn === 0)
                this.turn = 1;
            else
                this.turn = 0;
        },
        sign: function() { 
            return this.gameBoard[this.turn]
        }
    };
    const _container = document.querySelector('.container');
    _container.addEventListener('click', _render.bind(_Gameboard));

    return {};
})();