$(() => {
    // checking the url to reset category at the main pain.
    let location = document.location.href.split('/')
    if (location[location.length - 1] === "jeopardy.html") {
        localStorage.setItem('category', JSON.stringify(''))
    }
    // all the variables that are being declared throughout the game
    let name
    let shuffled
    let endScore
    let playerAns
    let sub;
    let index;
    let question;
    let answer;
    let score = 0;
    let value;
    let timeOut
    let resetTime = 10
    let time = 10
    let sub1 = []
    let sub2 = []
    let sub3 = []
    let sub4 = []
    let sub5 = []
    let count = 0
    let mode
    let today = moment().format('MMM Do, Y')
    let categoryPicked = JSON.parse(localStorage.getItem('category'))
    let modePicked = JSON.parse(localStorage.getItem('mode'))
    // setting the time for the timer
    if(modePicked === 'normal'){
        time = 20;
        resetTime = 20
    }
    // the things hiding from the beginning
    $('.subBtn, .endBtns, #turnScreen, .modeBtn, .signInForm, .highScoreDiv, .noHighScores, .instructions').hide()
    // this is the constructor function for the user names and scores for the high scores
    class User {
        constructor(name, score) {
            this.name = name;
            this.score = score;
            this.date = today
        }
    }
    // ==================on click events/buttons=================
    // the start button that starts the game
    $('.startBtn').on('click', function () {
        $('.startBtn, .highScoreBtn').hide()
        $('.signInForm').show()
        $('.instructions').show().text('Please enter your name to continue.')
    })
    // the buttons that allow you to pick a category
    $('.subBtn').on('click', function () {
        let category = $(this).attr('value');
        localStorage.setItem('category', JSON.stringify(category))
    })
    // the buttons in the table that displays the question once its clicked
    $('.gameBtn').on('click', (e) => {
        e.preventDefault();
        let target = $(e.target);
        sub = $(target).attr('data-sub');
        index = $(target).attr('data-index');
        value = $(target).val();
        target.hide()
    })
    // the close button on the modal
    $('.close').on('click', () => {
        clearTimeout(timeOut);
        time = resetTime;
        gameCounter()
    })
    // this is the submit button once the user answers a question
    $('#playerAnsBtn').on('click', (e) => {
        e.preventDefault();
        clearTimeout(timeOut);
        playerAns = $('#playerAnswer').val().toLowerCase()
        correctAnswer()
        $('.playerInput').hide();
    })
    // high scores button on my main page
    $('.highScoreBtn').on('click', function () {
        showScores()
        $('.highScoreDiv').show();
        $('.startBtn, .highScoreBtn').hide()
    })
    // multiple choice buttons on the easy mode setting
    $('.choiceBtns').on('click', function (e) {
        let target = $(e.target)
        playerAns = $(target).text().toLowerCase()
        correctAnswer()
        clearTimeout(timeOut)
        $('.choiceBtns').hide()
    })
    // this is the button on the sign in form
    $('.signInForm').on('submit', function (e) {
        e.preventDefault()
        name = $('#userName').val()
        localStorage.setItem('name', JSON.stringify(name))
        $('#userName').val('');
        $('.signInForm').hide()
        $('.instructions').text('Choose a mode. Easy mode is multiple choice answers and Normal mode is like the actual game where you type in your answers')
        $('.modeBtn').show()
    })
    // this is setting the mode value so the correct game displays
    $('.modeBtn').on('click', function () {
        mode = $(this).attr('value');
        localStorage.setItem('mode', JSON.stringify(mode))
        $('.subBtn, .instructions').slideDown(1000)
        $('.instructions').text('Now choose a category to begin playing.')
        $('.modeBtn').hide()
    })
    // back button when the high scores page displays to return to main menu
    $('.backBtn').on('click', function () {
        $('.highScoreDiv').hide()
        $('.startBtn, .highScoreBtn').show();
        $('.newScore').empty()
    })
    // =================all the functions===============
    // this gets the mode and then calls the correct functions to display the questions and titles
    function getMode() {
        getQuestions(categoryPicked)
        getTitles(categoryPicked)
        pickTheme(categoryPicked)
    }
    // this picks the class for each of the 4 games to change the background and colors for each game
    function pickTheme(cat) {
        if (categoryPicked === 'disney') {
            $('body').addClass('disney')
        } else if (categoryPicked === 'coding') {
            $('body').addClass('coding')
        } else if (categoryPicked === 'random') {
            $('body').addClass('random')
        } else if (categoryPicked === 'sports') {
            $('body').addClass('sports')
        }
    }
    // the random number function thats used to get random questions for game
    function randNum(num) {
        let number = Math.floor(Math.random() * num)
        return number
    }
    // for in loop that is getting the questions and pushing them into an array that is used to display the question
    let subNum = 1;
    function getQuestions(cat) {
        for (x in games[cat]) {
            for (y in games[cat][x]) {
                let level = games[cat][x][y]
                if (y === 'hard') {
                    let question = level[randNum(level.length)];
                    if (subNum === 1) {
                        sub1.push(question)
                    } else if (subNum === 2) {
                        sub2.push(question);
                    } else if (subNum === 3) {
                        sub3.push(question);
                    } else if (subNum === 4) {
                        sub4.push(question);
                    } else if (subNum === 5) {
                        sub5.push(question);
                    }
                } else {
                    let random1 = randNum(level.length)
                    let random2 = random1 + 1
                    if (random2 === level.length) {
                        random2 = 0
                    }
                    let quest1 = level[random1];
                    let quest2 = level[random2];
                    if (subNum === 1) {
                        sub1.push(quest1);
                        sub1.push(quest2);
                    } else if (subNum === 2) {
                        sub2.push(quest1);
                        sub2.push(quest2);
                    } else if (subNum === 3) {
                        sub3.push(quest1);
                        sub3.push(quest2);
                    } else if (subNum === 4) {
                        sub4.push(quest1);
                        sub4.push(quest2);
                    } else if (subNum === 5) {
                        sub5.push(quest1);
                        sub5.push(quest2);
                    }
                }
            }
            subNum++
        }
    }
    // gets the titles for the categories 
    function getTitles(cat) {
        let headers = $('.header');
        let titles = []
        for (x in games[cat]) {
            titles.push(x)
        }
        for (let i = 0; i < headers.length; i++) {
            $(headers[i]).text(titles[i])
        }
    }
    // this is the shuffle function to shuffle the answer choices on the multiple choice game
    function shuffle(array) {
        var currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    // this is all the things that happens when the modal is shown
    function showModal() {
        $('#ModalCenter').on('show.bs.modal', () => {
            if (sub === "sub1") {
                answer = sub1[index][2]
            } else if (sub === "sub2") {
                answer = sub2[index][2]
            } else if (sub === "sub3") {
                answer = sub3[index][2]
            } else if (sub === "sub4") {
                answer = sub4[index][2]
            } else {
                answer = sub5[index][2]
            }
            if (modePicked === "easy") {
                $('.choiceBtns').show();
                $('.playerInput').hide()
                if (sub === 'sub1') {
                    question = sub1[index][0];
                    shuffled = shuffle(sub1[index][1])
                    $('.choice1').text(shuffled[0])
                    $('.choice2').text(shuffled[1])
                    $('.choice3').text(shuffled[2])
                    $('.choice4').text(shuffled[3])
                } else if (sub === 'sub2') {
                    shuffled = shuffle(sub2[index][1])
                    question = sub2[index][0];
                    $('.choice1').text(shuffled[0])
                    $('.choice2').text(shuffled[1])
                    $('.choice3').text(shuffled[2])
                    $('.choice4').text(shuffled[3])
                } else if (sub === 'sub3') {
                    shuffled = shuffle(sub3[index][1])
                    question = sub3[index][0];
                    $('.choice1').text(shuffled[0])
                    $('.choice2').text(shuffled[1])
                    $('.choice3').text(shuffled[2])
                    $('.choice4').text(shuffled[3])
                } else if (sub === 'sub4') {
                    shuffled = shuffle(sub4[index][1])
                    question = sub4[index][0];
                    $('.choice1').text(shuffled[0])
                    $('.choice2').text(shuffled[1])
                    $('.choice3').text(shuffled[2])
                    $('.choice4').text(shuffled[3])
                } else {
                    shuffled = shuffle(sub5[index][1])
                    question = sub5[index][0];
                    $('.choice1').text(shuffled[0])
                    $('.choice2').text(shuffled[1])
                    $('.choice3').text(shuffled[2])
                    $('.choice4').text(shuffled[3])
                }
            } else {
                $('.choiceBtns').hide()
                $('#playerAnswer').val('')
                $('.playerInput, #playerAnsBtn').show();
                if (sub === 'sub1') {
                    question = sub1[index][0];
                } else if (sub === 'sub2') {
                    question = sub2[index][0];
                } else if (sub === 'sub3') {
                    question = sub3[index][0];
                } else if (sub === 'sub4') {
                    question = sub4[index][0];
                } else {
                    question = sub5[index][0];
                }
            }
            $('#question').text(`Q: ${question}`)
            count++
            countDownTimer();
            $('#result, .correctAnswer').empty();
            $('.close').hide()
        })
    }
    // this is the function that checks if the answer is right for both games
    function correctAnswer() {
        if (playerAns === answer) {
            score += parseInt(value);
            $('#result').text('Thats Correct').css('color', 'green')
        } else {
            score -= value
            $('#result').text('Incorrect. ').css('color', 'red')
            $('.correctAnswer').text(`The correct answer is..${answer}`).css('color', 'blue')
        }
        $('.close').show()
        // $('#playerScore').text(`score:${score >= 0 ? '$' + score : '-$' + score.toString().slice(1, score.length)}`)
        $('#playerScore').text(`score:${score >= 0 ? '$' + score : '-$' + Math.abs(score)}`)
    }
    // the timer that displays on the modal
    function countDownTimer() {
        if (time >= 0) {
            $('#questionTimer').html(time);
            time -= 1;
            timeOut = setTimeout(countDownTimer, 1000);
        }
        else {
            time = resetTime;
            $('questionTimer').html(time);
            score -= value;
            $('#result').text(`Im sorry you ran out of time. The correct answer is "${answer}"`).css('color', 'red')
            $('#playerScore').text(`Score: ${score}`)
            $('#playerAnsBtn').hide()
            $('.close').show();
            clearTimeout(timeOut);
        }
    }
    // this counts how many times the close button is clicked so that it will know when the game is over
    let gameCounter = () => {
        if (count === 25) {
            count = 0;
            $('.table').hide()
            $('.endBtns').show()
            endScore = score
            highScore()
        }
    }
    // gets and sets the scores from the players
    function highScore() {
        let userScore = localStorage.getItem('allScores') ? JSON.parse(localStorage.getItem('allScores')) : []
        let userName = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : "No name added"
        let newScore = new User(userName, endScore)
        userScore.push(newScore)
        localStorage.setItem('allScores', JSON.stringify(userScore))
    }
    // shows the scores when the high scores button is pressed
    function showScores() {
        let highScores = localStorage.getItem('allScores') ? JSON.parse(localStorage.getItem('allScores')) : [];
        highScores.sort(function (a, b) {
            return b.score - a.score
        })
        if (highScores.length === 0) {
            $('.topHigh, .highScoreTable').hide()
            $('.noHighScores').show()
        }
        if (highScores.length >= 5) {
            for (let i = 0; i < 5; i++) {
                $('.highScoreTable').append(`<tr class='newScore'><td>${highScores[i].name}</td><td>${highScores[i].score}</td><td>${highScores[i].date}</td></tr>`)
            }
        } else {
            for (let i = 0; i < highScores.length; i++) {
                $('.highScoreTable').append(`<tr class='newScore'><td>${highScores[i].name}</td><td>${highScores[i].score}</td><td>${highScores[i].date}</td></tr>`)
            }
        }
    }
    // this is so when the screen is small like on a phone it tells you to flip the phone to play the game
    let flipScreen = () => {
        if (window.innerWidth < 550) {
            $('#turnScreen').show()
            $('.table').hide();
            $('body').removeClass('disney sports random coding')
        } else {
            $('#turnScreen').hide()
            $('.table').show()
            getMode()
        }
    }
    // this is checking to see that the window has been resized and then calls the function again to display the correct message
    $(window).resize(function () {
        flipScreen()
    })
    getMode()
    showModal()
    flipScreen()
})