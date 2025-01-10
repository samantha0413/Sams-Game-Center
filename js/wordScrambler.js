$(() => {
    let splitWord
    let wordLength
    let scrambledWord = [];
    let theWord;
    let score = 0;
    let hintCounter = 0;
    let hint = ''
    let words = ['coding', 'javaScript', 'jQuery', 'bootstrap','computer', 'keyboard', 'function', 'array', 'ReGex', 'variable', 'assign', 'object', 'boolean', 'programmer', 'techincal', 'software', 'developer', 'skill', 'algorithm', 'structure', 'learning', 'career', 'design', 'create', 'challenge', 'information', 'logic', 'study', 'habit', 'qualified', 'evolving', 'growth', 'frustrating', 'website', 'interactive']
// everything that hides from beginning of game
    $('#giveUpBtn, .playAgain, .next, .everything').hide()
// functions that displays the word
    let displayWord = () => {
        $('ul').empty()
        for (let i = 0; i < scrambledWord.length; i++) {
            $('ul').append(`<li>${theWord[scrambledWord[i]]}</li>`)
        }
    }
    // start Button
    $('.startBtn').on('click', function(){
        $('.start, .rules').hide()
        $('.everything').show()
    })
// function that scrambles the word
    let scramble = (word) => {
        splitWord = word.split('');
        let randomLetter = Math.floor(Math.random() * splitWord.length)
        if (scrambledWord.includes(randomLetter)) {
            scramble(word)
        } else {
            scrambledWord.push(randomLetter)
        }
        if (scrambledWord.length === theWord.length) {
            displayWord()
        } else {
            scramble(word)
        }
    }
// function that gets the word randomly from the original array
    let getWord = () => {
        let randomWord = Math.floor(Math.random() * words.length);
        theWord = words[randomWord];
        scramble(theWord)
        words.splice(randomWord, 1)
    }
    getWord()
// submit button attached to input for the users answer
    $('.userInput').on('submit', (e) => {
        e.preventDefault()
        let value = $('#userInput').val();
        wordLength = scrambledWord.length
        if (value === theWord) {
            score += wordLength * 10
            hint = ""
            scrambledWord = []
            $('.results').text("That's Correct")
        } else {
            score -= wordLength * 10
            $('.results').text("Im Sorry That's Wrong")
        }
        $('.score').text(`SCORE: ${score}`)
        $('.next').show()
        $('#userInput, #submitBtn, .giveUpBtn, #hintBtn').hide()
    })
// next word button to get the next word
    $('.next').on('click', function () {
        if (words.length === 0) {
            $('.everything').hide()
            $('.gameOver').text('Game Over')
            $('.playAgain').show()
        } else {
            scrambledWord = []
            splitWord = ""
            getWord()
        }
        $('.next').hide()
        $('#userInput').val('')
        $('.results').empty()
        $('#userInput, #submitBtn, #hintBtn').show()
         hintCounter = 0
    })
    // play again button that reloads the page
    $('.playAgain').on('click', function () {
        location.reload()
    })
//   hint button
    $('#hintBtn').on('click', () => {
        score -= 10
        hint += theWord[hintCounter];
        $('#userInput').val(hint)
        hintCounter++
        if (hintCounter === theWord.length) {
            $('#hintBtn').hide()
            hint = ''
            $('#submitBtn').hide()
            $('.next').show()
        }
        $('.score').text(`SCORE: ${score}`)
    })
})
// the anime for the title/svg
anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    keyframes: [
        {fill: '#6002ee'},
        {fill: '#008b00'},
        {fill: '#8b00dc'},
        {fill: '#ef0078'}
    ],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});