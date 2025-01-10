$(() => {
    let clickClass;
    let randomPictures = ['🙂', '🤨', '😟', '😩', '😖', '😏', '🤥', '😲', '🤤', '🤕', '😬', '😵', '🎃', '🐯', '🐷', '🐒', '🐨', '🧚🏻‍', '🧜🏻‍', '🧝🏻‍', '🧞‍', '💫', '🐴' ];
    let findPicture = [['😕', 'confused'], ['🧐', 'monocole'], ['🤗', 'happyHands'], ['🥴', 'woozy'], ['😮', 'surprise'], ['😑', 'straighLine'], ['💍', 'ring'], ['🦄', 'unicorn']];
    let currentPictures = [];
    let font = ['30px', '35px', '45px', '50px', '55px', '60px', '65px', '70px'];
    // all the things hiding from the beginning
    $('#allList, .next, .playAgainBtn, .gameOver, .gameArea').hide();
    // function that shuffles the orignial array
    function shuffle() {
        let randomIndex = Math.floor(Math.random() * findPicture.length);
        currentPictures.push(findPicture.splice(randomIndex, 1));
        if (findPicture.length === 0) {
            return
        } else {
            shuffle();
        }
    }
    // function that display and appends the array
    function gamePlay() {
        let randomFont = Math.floor(Math.random() * font.length)
        // this is where the randompictures array gets appended
        for (let i = 0; i < randomPictures.length; i++) {
            for (let x = 0; x < 12; x++) {
                let topMove = Math.floor((Math.random() * window.innerHeight) + 120);
                let leftMove = Math.floor(Math.random() * window.innerWidth);
                $('body').append(`<div class="picture">${randomPictures[i]}</div>`);
                $('div:last').offset({top: topMove, left: leftMove }).css({ 'font-size': font[randomFont]});
            }
        }
        // this appends the shuffled array
        for (let x = 0; x < 1; x++) {
            let topMove = Math.floor((Math.random() * window.innerHeight) + 120);
            let leftMove = Math.floor(Math.random() * window.innerWidth);
            $('body').append(`<div class="${currentPictures[0][0][1]} correct">${currentPictures[0][0][0]}</div>`);
            $('.correct').offset({top: topMove, left: leftMove}).css({'font-size': font[randomFont], 'z-index': '20'});
        }
        // this is getting the class of the div you click on
        $('div').on('click', (e) => {
            let item = e.target;
            clickClass = $(item).attr('class');
            let clickedClasses = clickClass.split(' ');
            let checkClickedClass = clickedClasses[0];
            checkIfCorrect(checkClickedClass);
        })
        // this is changing the text so you know which picture to find
        $('#one').text(`${currentPictures[0][0][0]}`).addClass(`${currentPictures[0][0][1]}`);
    }
    // start button at the beginning
    $('.startBtn').on('click', () => {
        $('.startBtn').hide();
        $('h1').hide();
        $('#allList, .gameArea').show();
        shuffle()
        gamePlay()
    })
    // next button that gets the next picture
    $('.next').on('click', function () {
        if (currentPictures.length === 1) {
            $('.everything, .picture').hide();
            $('.playAgainBtn, .gameOver').show();
        } else {
            currentPictures.splice(0, 1);
            $('#one').empty().removeClass(`${currentPictures[0][0][1]}`);
            $('div.picture').remove();
            $('.next').hide();
            gamePlay()
            $(`.${currentPictures[0][0][1]}, #list1`).show();
        }
    })
    // this checks to see if the div you clicked on is correct
    let checkIfCorrect = (item) => {
        for (let x = 0; x < currentPictures.length; x++) {
            if (currentPictures[x][0][1] === item) {
                $(`#list1, .${currentPictures[x][0][1]}`).hide();
                $('.next').show();
                return
            }
        }
    }
    // play again button at the end of the game
    $('.playAgainBtn').on('click', function () {
        location.reload()
    })
})