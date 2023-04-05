$('document').ready(function (){

    let turn = 'X';
    let result = '';
    let turnCount = 0;
    let XScore = 0;
    let OScore = 0;

        const board = {
            box1: '',
            box2: '',
            box3: '',
            box4: '',
            box5: '',
            box6: '',
            box7: '',
            box8: '',
            box9: '',
        };
    
    const determineWinner = function () {
        //Rows
        if (!result) {
            for (let i = 1; i <= 7; i += 3) { 
                if (board[`box${i}`] === board[`box${i+1}`] && board[`box${i}`] === board[`box${i+2}`]) { 
                    if (board[`box${i}`] === 'X' || board[`box${i}`] === 'O') {
                        result = board[`box${i}`];
                        console.log(result);
                    }
                }  
            }
        }
        //Columns
        if (!result) {
            for (let i = 1; i <= 3; i += 1) {
                if (board[`box${i}`] === board[`box${i+3}`] && board[`box${i}`] === board[`box${i+6}`]) {
                    if (board[`box${i}`] === 'X' || board[`box${i}`] === 'O') {
                        result = board[`box${i}`];
                        console.log(result);
                    }
                }
            }
        }
        //Diagonal
        if (!result) {
            if (board.box1 === board.box5 && board.box1 === board.box9 || board.box3 === board.box5 && board.box3 === board.box7) {
                result = board.box5
                console.log(result)
            }
        }
        //Draw
        if (!result && turnCount === 9) {
            result = 'draw'
            console.log('draw')
        }
        //Displays result and adds to score
        if (result) {
            let printedResult = $("<p>").attr({id: 'printedResult', class: 'animate__animated animate__fadeIn'});
            if (result !== 'draw') {
                printedResult.html(`${result} WINS!`);
                $('header').append(printedResult);
            } else {
                printedResult.html(`DRAW!&#160;`);
                $('header').append(printedResult);
            }

            let resetButton = $("<button>").attr({role: 'button', class: 'button-85 animate__animated animate__fadeIn', id: 'resetButton'}).html('Play again?');
            $('header').append(resetButton)
            if (result === 'X') {
                XScore ++;
                $('#XScore').html(XScore.toString())
            } else if (result === 'O') {
                OScore ++;
                $('#OScore').html(OScore.toString())
            }
        }
    }
    
    //Function that allows user to place X or O on board
    $('#game-box').on('click', function(event) {
        let clickedBox = event.target.id;

        if (turnCount < 9 && !result && !board[clickedBox] && $(event.target).hasClass('grid-box')) {
            if (turn === 'X') {
                board[clickedBox]= 'X'
                $(`#${clickedBox}`).addClass('x animate__fadeIn')
                turn = 'O'
                turnCount++
                determineWinner()
            } else if (turn === 'O') {
                board[clickedBox]= 'O'
                $(`#${clickedBox}`).addClass('o animate__fadeIn')
                turn = 'X'
                turnCount++
                determineWinner()
            } 
        }
    })

    //Allows user to go first as X or O
    $('#chooseX').on('click', function () {
        if (turnCount === 0) {
            turn = 'X';
        }
    })

    $('#chooseO').on('click', function () {
        if (turnCount === 0) {
        turn = 'O';
        }
    })

    //Button to reset board --- resetButton is added dynamically, so jQuery must retrieve the 'header in the first instance of loading the page.
    $('header').on('click', function (event){
        if (event.target.id === 'resetButton'){

            for (let i = 1; i <= 9; i++) {
                board[`box${i}`] = ''
            }
            console.log(board)
            $('.grid-box').removeClass('o x animate__fadeIn');
            turn = 'X';
            result = '';
            turnCount = 0;
            
            $('#resetButton').addClass('animate__fadeOut');
            setTimeout(function () {
                resetButton.remove()}, 1500
            );
            $('#printedResult').addClass('animate__fadeOut');
            setTimeout(function () {
                $('#printedResult').remove()}, 1500
            );
        }
    })
})

// Things to check and do:
    //  1. You can click on the backbaord and change the background image of that, this can be replicated when I click drag and release my mouse
    //  2. Animate in and out the X and Os
    //  3. Relate the X and Os to the UI (score etc)
    //  4. Create option to play AI
