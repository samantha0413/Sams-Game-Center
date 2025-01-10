$(() => {
    let win = 0;
    let lose = 0;
    let tie = 0;
    let target;
    let id
    let userPick
    let userChoice
    let index
    let count = 0;
    let winning = [['one', 'two', 'three'], ['four', 'five', 'six'], ['seven', 'eight', 'nine'], ['one', 'five', 'nine'], ['three', 'five', 'seven'], ['one', 'four', 'seven'], ['two', 'five', 'eight'], ['three', 'six', 'nine']]
    let computer = [];
    let user = [];
    let gameBoard = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let pieceChoice = {
        web: ['🕸', '🕷'],
        angel: ['😇', '😈'],
        sick: ['🤢', '😷'],
        caterpillar: ['🐛', '🦋'],
    }
    // things hiding from the beginning
    $('.resetBtn, table, #main, .emojiChoices, .instructions, #turnScreen, h2, .defaultBtn').hide()
    // start button
    $('.startBtn').on('click', () => {
        $('.startBtn, h1').hide();
        $('.emojiChoices, .instructions, h2, .defaultBtn').show()
    })
    // the buttons with the different game pieces
    $('.gamePiece').on('click', function (e) {
        userChoice = $(e.target).attr('value')
        index = $(e.target).attr('data-index')
        userPick = pieceChoice[userChoice]
        $('table, #main').show()
        $('.emojiChoices, .instructions, .defaultBtn, h2').hide()
    })
    // default button
    $('.default').on('click', function(){
        $('table, #main').show()
        $('.emojiChoices, .instructions, h2, .defaultBtn').hide()
    })
// reset button that resets the game but keeps the wins/losses/ties
    $('.resetBtn').on('click', () => {
        reset();
        $('.resetBtn').hide()
        $('.emojiChoices, .defaultBtn').show().css('margin-top', '40px')
    })
// function so that the user can pick a game piece
    function userPieceChoice() {
        if(userChoice === 'default'){
            $(target).text('X').css('color', 'lightseagreen')
            $(`#${gameBoard[id]}`).text('O').css('color', 'purple')
        }else{
              if (index === '0') {
            $(target).text(`${userPick[0]}`)
            $(`#${gameBoard[id]}`).text(`${userPick[1]}`)
        } else {
            $(target).text(`${userPick[1]}`)
            $(`#${gameBoard[id]}`).text(`${userPick[0]}`)
        }
        }
      
    }
// the on click for the squares on table
    $('td').on('click', function (event) {
        event.stopImmediatePropagation()
        target = $(event.target);
        let targetId = $(target).attr('id')
        userPieceChoice()
        $(target).addClass('filled')
        user.push(targetId)
        $('.emojiChoices, .defaultBtn').hide()
        if (winnings(user)) {
            win++;
            $('.whoWon').text('Congrats, You Won')
            $('.win').text(win)
            $('.resetBtn').show()
        }else {
            count++
            computerPick()
        }
    })
// function that allows the computer to make a choice on where to play
    function computerPick() {
        id = Math.floor(Math.random() * gameBoard.length)
        if (count < 8) {
            if ($(`#${gameBoard[id]}`).hasClass('filled')) {
                computerPick()
            } else {
                userPieceChoice()
                $(`#${gameBoard[id]}`).addClass('filled')
                computer.push(gameBoard[id]);
                if (winnings(computer) === true) {
                    lose++;
                    $('.whoWon').text('Sorry, You Lost')
                    $('.lose').text(lose)
                    $('.resetBtn').show()
                } else {
                    count++;
                }
            }
        } else {
            tie++
            $('.whoWon').text('Its A Tie')
            $('.tie').text(tie);
            $('.resetBtn').show()
        }
    }
// function that determined who wins
    let winnings = (array) => {
        for (let x = 0; x < winning.length; x++) {
            let matched = 0;
            let arr = array
            for (let y = 0; y < arr.length; y++) {
                if (winning[x].includes(array[y])) {
                    matched++
                }
            } if (matched === 3) {
                return true
            }
        } return false
    }
    // reset function that allows to reset the game but keeps the scores
    let reset = () => {
        $('td').empty().css('color', 'black').removeClass('filled')
        $('.whoWon').text('')
        return computer = [], count = 0, user = [], id = undefined
    }
    // function that tells you to flip your phone screen sideways to continue playing
    let flipScreen = () => {
        if (window.innerWidth < 550) {
            $('#turnScreen').show();
            $('.everything').hide()
        } else {
            $('#turnScreen').hide()
            $('.everything').show()
        }
    }
    flipScreen()
    // checking to see if the window has been resized
    $(window).resize(function () {
        flipScreen()
    })
})