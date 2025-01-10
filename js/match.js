$(() => {
    let games = {
        emoji: [['😁', 'smile'], ['😁', 'smile'], ['😇', 'angel'], ['😇', 'angel'], ['😍', 'love'],
        ['😍', 'love'], ['🥶', 'angry'], ['🥶', 'angry'], ['😈', 'devil'], ['😈', 'devil'], ['🤢', 'sick'],
        ['🤢', 'sick'], ['😷', 'covid'], ['😷', 'covid'], ['🤑', 'money'], ['🤑', 'money']],
        math: [['8+2', '10'], ['10', '10'], ['9x6', '54'], ['54', '54'], ['15-9', '6'], ['6', '6'], ['1,500/5', '300'], ['300', '300'],
        ['15x3', '45'], ['45', '45'], ['29-15', '14'], ['14', '14'], ['17+19', '36'], ['36', '36'], ['21/3', '7'], ['7', '7']],
        couples: [['Johnny', 'johnny'], ['June', 'johnny'], ['Bonnie', 'clyde'], ['Clyde', 'clyde'], ['Sonny', 'sonny'], ['Cher', 'sonny'], ['Tina', 'ike'], ['Ike', 'ike'], ['Faith Hill', 'tim'], ['Tim McGraw', 'tim'], ['Kurt Russel', 'kurt'], ['Goldie Hawn', 'kurt'], ['Gwen Stefani', 'gwen'], ['Blake Shelton', 'gwen'], ['Elvis', 'elvis'], ['Priscilla', 'elvis']],
        opposite: [['🥶', 'cold'], ['🥵', 'cold'], ['😃', 'sad'], ['😟', 'sad'], ['🤢', 'sick'], ['😷', 'sick'], ['😈', 'devil'], ['😇', 'devil'], ['🥳', 'loud'], ['🤫', 'loud'], ['🌞', 'sun'], ['🌛', 'sun'], ['👩🏼‍', 'man'], ['🧔🏻', 'man'], ['❤️', 'heart'], ['💔', 'heart']]
    }
    let userGame
    let index
    let game
    let shuffledArray = []
    let click = 0
    let matches = []
    let clicked
    let userPick
    let matched = 0
    // all the things hiding from the beginning
    $('.gameBtn, .restart, .won, .gameInstructions, .theme, .choices, .OR, .default').hide()
    // start button
    $('.startBtn').on('click', function(){
        $('.start').hide()
        $('.theme, .choices, .OR, .default').show()
    })
    // theme buttons so user can pick a theme or choose default
    $('.themeBtn').on('click', function () {
        userPick = $(this).val()
        $('.gameBtn, .gameInstructions').show()
        $('.themeBtn').hide()
        $('.theme, .OR').hide()
    })
    // pick theme function that allows user to choose between different styling for the games
    function pickTheme(userPick) {
        if (userGame === 'math') {
            $('.front').text('π')
            $('.back').css('font-size', '26px')
        } else if (userGame === 'emoji') {
            $('.front').text('✰')
            $('.back').css('font-size', '80px')
        } else if (userGame === 'couples') {
            $('.front').text('⚤')
            $('.back').css('font-size', '26px')
        } else {
            $('.front').text('❀')
            $('.back').css('font-size', '80px')
        }
        if (userPick === 'default') {
            if (userGame === 'math') {
                $('.back').addClass('math-gradient')
                $('.front').addClass('mathFront')
            } else if (userGame === 'emoji') {
                $('.back').addClass('emoji-gradient');
                $('.front').addClass('emojiFront')
            } else if (userGame === 'couples') {
                $('.back').addClass('couples-gradient');
                $('.front').addClass('couplesFront')
            } else {
                $('.back').addClass('opposite-gradient');
                $('.front').addClass('oppositeFront')
            }
        } else {
            if (userPick === 'choice1') {
                $('.back').addClass('choice1');
                $('.front').addClass('emojiFront')
            } else if (userPick === 'choice2') {
                $('.back').addClass('math-gradient')
                $('.front').addClass('mathFront')
            } else if (userPick === 'choice3') {
                $('.back').addClass('couples-gradient');
                $('.front').addClass('couplesFront')
            } else {
                $('.back').addClass('opposite-gradient');
                $('.front').addClass('oppositeFront')
            }
        }
    }
    // this is the game button that appends the cards once the user has picked a game
    $('.gameBtn').on('click', function (e) {
        $('.title').hide()
        userGame = $(e.target).val()
        game = games[userGame]
        shuffle()
        for (card of shuffledArray) {
            $('.gameArea').append(`<div class='indCard'><div class="front"></div><div value="${card[0][1]}" class="back">${card[0][0]}</div></div>`)
        }
        pickTheme(userPick)
        // the card on click function
        $('.front').on('click', function (e) {
            click++
            clicked = $(e.target).siblings().attr('value');
            matches.push(clicked)
            $(this).parent().addClass('topFlip picked')
            counter()
        })
        $('.allGameBtns, .gameInstructions').hide()
    })
    // shuffling the cards so that they append randomly
    function shuffle() {
        index = Math.floor(Math.random() * game.length)
        shuffledArray.push(game.splice(index, 1))
        if (game.length === 0) {
            return
        } else {
            shuffle()
        }
    }
    // keeps track of how many cards are flipped over and how many matches the user has to determine if the game is over
    function counter() {
        if (click === 2) {
            checkMatch()
            click = 0
            matches = []
        }
        if (matched === 8) {
            $('.game').slideUp(8000)
            $('.restart, .won, .title').fadeIn(6000)
        }
    }
// restart button at the end of the game..it reloads the page
    $('.restart').on('click', function () {
        location.reload()
    })
    // checks to see if the two cards flipped over are a match and if not it flips the cards back over
    function checkMatch() {
        if (matches.length === 2) {
            if (matches[0] === matches[1]) {
                matched++
                $('.picked').removeClass('picked')
            } else {
                setTimeout(function () {
                    $('.picked').removeClass('topFlip picked')
                }, 2000)
            }
        }
    }
})