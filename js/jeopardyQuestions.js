let games = {
    disney: {
        princess: {
            easy: [['Who was the very first Disney Princess?', ['Snow White', 'Belle', 'Aurora', 'Cinderella'], 'snow white'], ['What country is Belle from?', ['England', 'France', 'Ireland', 'America'], 'france'], ['Who is not an actucal princess, but is part of the Disney Princess franchise?', ['Tinkerbell', 'Mulan', 'Cinderella', 'Ariel'], 'mulan'],
            ['Aurora is the princes in which Disney movie?', ['Sleeping Beauty', 'Aladdin', 'The Little Mermaid', 'The Princess and the Frog'], 'sleeping beauty']],
            medium: [['Rapunzel was locked in a tower for how many years?', ['18', '10', '5', '15'], '18'], ['Who was the first princess to be a part of a Disney movie taking place in an area other then Western Europe?', ['Jasmine', 'Ariel', 'Belle', 'Snow White'], 'jasmine'], ['Which princess became royal by marriage?', ['Belle', 'Snow White', 'Aurora', 'Ariel'], 'belle'],
            ['Ariel is the ______ daughter of the king Triton?', ['youngest', 'oldest', 'middle', '2nd to last'], 'youngest']],
            hard: [['How old is Snow White?', ['14', '12', '16', '18'], '14'], ["Who was Pocahontas's love?", ['John Smith', 'Kocoum', 'Ratcliffe', 'Thomas'], 'john smith']]
        },
        movies: {
            easy: [['The movie "Frozen" was released in what year?', ['2013', '2012', '2011', '2014'], '2013'], ['The movie "Toy Story 4" was released in what year?', ['2019', '2018', '2020', '2017'], '2019'], ['The Lion King brought in how much money on opening night?', ['40 million', '20 million', '10 million', '30 million'], '40 million'],
            ['In what year did "Alice in Wonderland" first premiere?', ['1951', '1952', '1953', '1954'], '1951']],
            medium: [['The movie "Wreck it Raplh" was nominated for which academy award?', ['Best Animated Feature Film', 'Best Orignial Song', 'Best Orignal Screenplay', 'Best Picture'], 'best animated feature film'], ['What was the first movie to premiere from Walt Disney Studios?', ['Snow White', 'Cinderella', 'Alice in Wonderland', 'Mickey Mouse'], 'Snow White'], ["'Inside Out' was released in what year?", ['2013', '2012', '2010', '2015'], '2015'],
            ['What year was "Chicken Little" released?', ['2005', '2006', '2004', '2003'], '2005']],
            hard: [['"Peter Pan" had how many re-releases?', ['5', '6', '7', '4'], '5'], ["'The Fox and the Hound' was released in what year?", ['1981', '1976', '1982', '1978'], '1981']],
        },
        sidekicks: {
            easy: [['Name the fish sidekick of Ariel in "The Little Mermaid"?', ['Flounder', 'Sebastian', 'Scuttle', 'Melody'], 'flounder'], ["What was the name of Jasmine's tiger?", ['Rajah', 'Abu', 'Iago', 'Genie'], 'rajah'], ["Who was Aladdin's sidekick", ['Sultan', 'Abu', 'Iago', 'Genie'], 'abu'],
            ["Who was Peter Pan's sidekick?", ['tinker bell', 'wendy', 'lost boys', 'smee'], 'tinker bell']],
            medium: [['What was the name of the fat mouse in Cinderella?', ['Jaq', 'Gus', 'Lucifer', 'Duke'], 'gus'], ["What was Tarzans' gorilla sidekicks' name?", ['Terk', 'Clayton', 'Tantor', 'Kerchak'], 'terk'], ["Who was Mike Wazowski's sidekick in the movie 'Monsters, Inc'?", ['Sully', 'Waternoose', 'Randall', 'Celia'], 'sully'],
            ["Who was Marlins' sidekick on his quest to find his son in 'Finding Nemo'?", ['Dory', 'Bruce', 'Crush', 'Gill'], 'dory']],
            hard: [['What was the name of the hummingbird in "Pocahontas"?', ['Meeko', 'Flit', 'Percy', 'Ratcliffe'], 'flit'], ["What was the dragon's name that was sent to protect Mulan on her journey?", ['Shan Yu', 'Mushu', 'Zhou', 'Yao'], 'mushu']],
        },
        villians: {
            easy: [['Who was the villian in the movie "Robin Hood"?', ['Prince John', 'Little John', 'King Richard', 'The Sheriff'], 'prince john'], ['What is the name of the villian in the movie "Peter Pan"?', ['Captain Hook', 'Smee', 'John', 'Michael'], 'captain hook'], ['Who is the villian in the movie "The Lion King"?', ['Scar', 'The Hyenas', 'Rafiki', 'Zazu'], 'scar'],
            ['Who was the villian in the movie "Aladdin"?', ['Jafar', 'Genie', 'Iago', 'Abu'], 'jafar']],
            medium: [['What was the name of the villain in the movie "Hercules"?', ['Hades', 'Phil', 'Meg', 'Zeus'], 'hades'], ['Who was the villian in the movie "Beauty and the Beast"', ['Gaston', 'Maurice', "Monsieur D' Arque", 'Phillipe'], 'gaston'], ["What is the evil fairy's name in the movie 'The Sleeping Beauty'?", ['Maleficent', 'Flora', 'Fauna', 'Merryweather'], 'maleficent'],
            ['What was the name of the villian in the movie "A Bugs Life"?', ['Hopper', 'Flik', 'Atta', 'Dot'], 'hopper']],
            hard: [['What name does Ursula take when disguised as a human?', ['Valerie', 'Vanessa', 'Melody', 'Morgana'], 'vanessa'], ['What year did Disney open the villian shop?', ['1991', '1992', '1990', '1993'], '1991']],
        },
        walt: {
            easy: [['Disneyland Opened what in what year?', ['1995', '1996', '1997', '1994'], '1955'], ["Where is Disney's headquarters located?", ['California', 'New York', 'Florida', 'Texas'], 'california'], ["'What was the name of Disneys' first sound film starring Mickey Mouse?", ['Steamboat Willie', "The Gallopin' Gaucho", 'Plane Crazy', 'Silly Symphonies'], 'steamboat willie'],
            ['What year was Walt Disney founded?', ['1923', '1921', '1924', '1926'], '1923']],
            medium: [["What was the name of Disney's wife?", ['Lillian', 'Delilah', 'Mary', 'Laura'], 'lillian'], ['What year did Walt Disney pass away?', ['1966', '1967', '1963', '1969'], '1966'], ["Walt Disney first designed Mickey Mouse in 1928 but he didn't call him Mickey. What was Mickey Mouse's orignal name?", ['Mortimer', 'Max', 'Michael', 'Mick'], 'mortimer'],
            ['Walt Disney was first part of a firm called "_________ Studios"', ['Disney Brothers Cartoon', "Laugh-O-Gram", 'Walt Disney', 'The Disney Company'], 'laugh-o-gram']],
            hard: [["What was the name of Walt Disney's brother?", ['Roy', 'Ralph', 'Roger', 'Randall'], 'roy'], ['What did Walt Disney die from?', ['Lung Cancer', 'Car Accident', 'Old Age', 'Stomach Cancer'], 'lung cancer']],
        }
    },
    sports: {
        football: {
            easy: [['How Many players are on the field during a game of football?', ['22', '24', '20', '26'], '22'], ['A footfield is how many yards long?', ['120', '140', '100', '160'], '120'], ['In Europe, early footballs were made out of what?', ['Animal Bladders', 'Animal Hide', 'Leather', 'Rubber'], 'animal bladders'],
            ['A field goal is worth how many points?', ['3', '6', '4', '2'], '3']],
            medium: [['A football weighs how many ounces?', ['14', '16', '10', '12'], '14'], ['Typically football games last how many minutes?', ['60', '50', '30', '90'], '60'], ['How many officals are there on the field during a game', ['7', '2', '5', '4'], '7'],
            ['A touchdown is worth how many points?', ['6', '8', '4', '3'], '6']],
            hard: [['The first "professional" football player was paid how much money?', ['$500', '$1000', '$700', '$200'], '$500'], ['The first football ever player was in what year?', ['1869', '1900', '1903', '1879'], '1869']],
        },
        basketball: {
            easy: [['How many players are on the court during the game?', ['10', '6', '12', '16'], '10'], ['Basketball originally used a ________ ball?', ['Soccer', 'Volley', 'Beach', 'Rugby'], 'soccer'], ['How many feet is the 3-point line from the basket?', ['22', '20', '24', '21'], '22'],
            ['For men an offical basketball weighs how many ounces?', ['22', '24', '20', '18'], '22']],
            medium: [['Basketball games are played in how many quarters?', ['4', '2', '6', '3'], '4'], ['A regular basket is worth how many points?', ['2', '4', '1', '3'], '2'], ['How many types of fouls are there in basketball?', ['2', '4', '1', '3'], '2'],
            ['A regulation basketball court is how many feet long?',['94', '96', '80', '86'], '94']],
            hard: [['The first game was played in what year?', ['1891', '1900', '1898', '1901'], '1891'], ['Womens basketball started in what year?', ['1892', '1900', '1893', '1888'], '1892']],
        },
        baseball: {
            easy: [['How many foul balls are allowed before the batter takes the base?', ['4', '2', '3', '5'], '4'], ["How many strikes until you're out?", ['3', '2', '1', '4'], '3'], ['How many innings are there in a game of baseball?', ['9', '6', '7', '8'], '9'],
            ['How many outs is the team batting allowed?', ['3', '4', '2', '5'], '3']],
            medium: [['Mike Piazza was added to the Hall of Fame in what year?', ['2016', '2015', '2014', '2017'], '2016'], ['What is the position between the second and third base called?', ['Shortstop', 'Catcher', 'Left field', 'Pitcher'], 'shortstop'], ['One has to wait how many years after retirement to be considered for the Hall of Fame?', ['5', '1', '3', '2'], '5'],
            ['Pete Rose and Shoeless Joe Jackson were banned from baseball for what?', ['Gambling', 'Cheating', 'Fighting', 'Being Arrested'], 'gambling']],
            hard: [['In what year was Babe Ruth added to the Hall of Fame', ['1936', '1933', '1939', '1937'], '1936'], ['In what state is the National Hall of Fame located?', ['New York', 'Massachusetts', 'Pennsylvania', 'California'], 'new york']],
        },
        hockey: {
            easy: [['How many players are on the ice during a game?', ['12', '11', '10', '13'], '12'], ['Hockey is divided into 3 periods, how many minutes is each one?', ['20', '30', '25', '15'], '20'], ['The most common number of Officals during a game is what?', ['1', '3', '4', '5'], '3'],
            ['Fighting will get the player how many minutes in the penalty box?', ['2', '5', '4', '10'], '5']],
            medium: [['Players move approximately how many MPH on the ice?', ['30', '10', '15', '20'], '30'], ['The chief difference in womens hockey and mens hockey is that ____ is not allowed in womens hockey.', ['Body Checking', 'Fights', 'Cycling', ' Forechecking'], 'body checking'], ['Attempting to take the puck from an opponent or to remove the opponent from play is called?', ['checking', 'Deflection', 'Breaking Out', 'Cherry-Picking'], 'checking'],
            ['First indoor hockey game was played in what year?', ['1875', '1880', '1878', '1876'], '1875']],
            hard: [['The United States Hockey League welcomed the first professional female in what year?', ['1969', '1970', '1972', '1968'], '1969'], ['The Stanley Cup was first awarded in what year?', ['1893', '1890', '1891', '1889'], '1893']],
        },
        soccer: {
            easy: [['How many players are on the field during a game?', ['22', '20', '18', '24'], '22'], ['What is soccer called in the United Kingdom?', ['Football', 'Soccer', 'Rugby', 'Kick Ball'], 'football'], ['A standard game consists on 2 periods that last how many minutes?', ['30', '45', '20', '60'], '45'],
            ['How many minutes does the half time last?', ['15', '30', '20', '10'], '15']],
            medium: [['Recieveing a red card during game play means the player is _____.', ['Dismissed', 'Warned', 'Booked', 'Stopping Play'], 'dismissed'], ['The referee is usually assisted by how many assistant referees?', ['1', '2', '3', '4'], '2'], ['How many yards is the pitch, or field, in internation adult matches?', ['120', '100', '110', '125'], '120'],
            ['A soccer ball is how many inches round?', ['28', '30', '26', '32'], '28']],
            hard: [['Mens soccer was first introduced in the Olympics in what year?', ['1900', '1901', '1910', '1908'], '1900'], ['Womens soccer was first introduced in the Olympics in what year?', ['1996', '1990', '2000', '1999'], '1996']],
        }
    },
    coding: {
        html: {
            easy: [['The basic structure of an HTML document includes ______, which surround content and apply meaning to it.', ['Tags', 'Attributes', 'Elements', 'Source'], 'tags'], ['Paragraphs use what kind of tag?', ['<p>', '<section>', '<div>', '<h1>'], '<p>'], ['Where is the title of the page located in HTML?', ['head', 'nav', 'main', 'body'], 'head'],
            ['What does <abbr> stand for?', ['Abbreviation', 'Alternate', 'Address', 'Article'], 'abbreviation']],
            medium: [['What Does HTML stand for?', ['HyperText Markup Language', 'HyperType Markup Language', 'HyperText Making Language', 'HydroText Markup Language'], 'hypertext markup language'], ['HTML describes the ____ of pages.', ['Structure', 'Format', 'Layout', 'Styling'], 'structure'], ['Attributes tell us more about the _____.', ['tags', 'elements', 'text', 'HTMl'], 'elements'],
            ['What comes after the </head> part of the HTML?', ['body', 'header', 'footer', 'main'], 'body']],
            hard: [['How many "levels" of headings does HTML have?', ['6', '5', '2', '4'], '6'], ['The text inside a <b></b> tag makes the text _____.',['Bold', 'Block', 'Italic', 'Black'], 'bold']],
        },
        css: {
            easy: [['What does CSS stand for?',['Cascading StyleSheet', 'Cascading SheetStyles', 'Convenient StyleSheet', 'Classic StyleSheet'], 'cascading stylesheet'], ['What is the property of an anchor element shows that the element currently has the user’s mouse over it?', [':visited', ':link', ':active', ':hover'], ':hover'], ['What keyword is used to initiate a media query?', ['@media', '@media-query', '@mediaQuery', '!media'], '@media'],
            ['What type of image reduces the image quality slightly to improve loading time?', ['.jpg', '.png', '.gif', '.mp4'], '.jpg']],
            medium: [['Which one is NOT a CSS selector? Text, Type, Class, ID',['Text', 'Type', 'Class', 'ID'], 'text'], ['What property would you use to change the color of your text?',['Color', 'Text-Color', 'CurrentColor', ' Color-Adjust'], 'color'],['What property would you use to make your text bold?',['Font-Weight', 'Font-Kerning', 'Font-Display', 'Font-Style'], 'font-weight'],
            ['When the position property is given a value of _______, the box is taken out of normal flow.',['Absolute', 'Fixed', 'Static', 'Relative'], 'absolute']],
            hard: [['The _____ property tells the browser to move an element by an amount, defined by a length.',['Translate', 'Rotate', 'Matrix', 'Skew'], 'translate'], ['This property lets you decide how you want one element to "blend" with the element it sits on.',['mix-blend-mode', 'mask-image', 'marker-mid', 'mask-border-width'], 'mix-blend-mode']],
        },
        javascript: {
            easy: [['Object properties that contain functions are generally called what?', ['Methods', 'Object Functions', 'Handlers', 'Prototypes'], 'methods'], ['“const myObj = {name: “Susan”} is an example of what syntax?', ['Object Literal', 'Object router', 'Object method', 'Object Constructor'], 'object literal', ''], ['The JavaScript _____ object is a global objecct that is used in the construction of arrays.',['Array', 'Boolean', 'Function', 'Number'], 'array'], ['The _____ method is a special method for creating and initializing an object with a class.',['Constructor', 'Classes', 'Extends', 'Static'], 'constructor'],
            ['What is an expression evaluated after each pass through a loop?',['Condition', 'Statement', 'Function', 'Class'], 'condition']],
            medium: [['What is the name of an argument to be passed to the function?',['Name', 'Parameter', 'Statement', 'Expression'], 'parameter'], ['_____.prototype allows the addition of properties to all objects of the type object.',['Object', 'Array', 'Set', 'Map'], 'object'], ['The _____ JavaScript object is a wrapper object allowing you to work with numerical values.',['Number', 'Math', 'Value', 'Map'], 'number'],
            ['_____ is a built in object that has properties and methods for mathematical constants and functions.',['Math', 'Number', 'Min', 'Max'], 'math']],
            hard: [['The _____ object represents the eventual completion or failure of an asynchronous operation, and its resulting value.',['Promise', 'Error', 'RegExp', 'Function'], 'promise'], ['The ____ object holds key value pairs and remembers the original insertion order of the keys.',['Map', 'Date', 'Symbol', 'Error'], 'map']],
        },
        jQuery: {
            easy: [['Jquery is a third party library for ______.',['JavaScript', 'CSS', 'Bootstrap', 'HTML'], 'javascript'], ['All JQuery must start with what symbol?',['$', '^', '{', '&'], '$'], ['.text().css() is an example of what?',['chaining', 'linking', 'changing', 'containing'], 'chaining'],
            ['What event listener listens for the key to be pressed down but does NOT include the directional arrows?',['.keyup()', '.keydown', '.keypress', '.keyready'], '.keypress']],
            medium: [['what method removes all child nodes of the set of matched elements from the DOM',['.replace()', '.empty()', '.remove()', '.detach()'], '.empty()'], ['What method displays or hides the matched elements by animating their opacity',['.fadeOut()', '.fadeIn()', '.fadeToggle()', '.fadeTo()'], '.fadeToggle()'], ['What method returns the number of elements in the jQuery object.',['.length', '.index', '.get', '.context'], '.length'],
            ['What method removes a property for the set of matched elements',['.removeProp()', '.remove()', '.removeAttr()', '.removeClass()'], '.removeProp()']],
            hard: [['what is the filter that selects the element at index n within the matched set.',[':lt()', ':eq()', ':gt()', ':root'], ':eq()'], ['what is the callback object that determines if the callbacks have already been called at least once.',['.fired()', '.fire()', '.fireWith()', '.has()'], '.fired()']],
        },
        bootstrap: {
            easy: [['What class would you use to center you text?',['text-center', 'text-align', 'text-indent', 'text-transform'], 'text-center'], ['Bootstrap is a third party library for _____.',['CSS', 'HTML', 'JavaScript', 'DOM'], 'css'], ['Bootstrap’s grid system is based on how many columns?',['12', '9', '10', '6'], '12'],
            [' Which class provides a responsive container with breakpoints?',['container', 'container-fluid', 'containerfixed', 'fixed-screen'], 'container']],
            medium: [['To make your image responsive you need to add a class of what?',['img-fluid', 'img-responsive', 'img-thumbnail', 'img-align'], 'img-fluid'], ['Which plug-in is used to highlight text yellow',['mark', 'highlight', 'mark-highlight', 'highlight-yellow'], 'mark'], ['Bootstrap has 5 breakpoints, 992px is at which breakpoint?',['small', 'medium', 'large', 'extra-large'], 'medium'],
            ['if you use text-secondary what color will your text be?',['black', 'gray', 'blue', 'red'], 'gray']],
            hard: [['Which class is used to create a basic list group?',['list-group', 'group-list', 'group-group', 'grouped-list'], 'list-group'], ['what is the class to shorten text with an ellipsis?',['text-truncate', 'text-shorten', 'text-cut', 'text-edit'], 'text-truncate']],
        },
    },
    random: {
        lyrics: {
            easy: [['Name the song by Avril Lavigne with these lyrics "chill out, what you yelling for? Lay back its all be done before"', ['Complicated', 'Sk8er Boi', 'Tomorrow', 'Too Much to Ask'], 'complicated'], ['Who is the artist of this song "Mood with these lyrics" "but try to play it cool, baby, I aint playing by your rules"?', ['24k Goldn', 'Rio 24k', 'Kgpn 24k', '24k Magic'], '24k goldn'], ['Who is the artist that has a song "Boulevard of Broken Dreams" with these lyrics "my shadows the only one that walks beside me"?', ['Green Day', 'Crossfade', 'Shinedown', 'Skillet'], 'green day'],
            ['Name the song by Lil Nas X with these lyrics "Im gonna take my horse to the old town road"', ['Old Town Road', 'Old Town', 'Old Road', 'Old Town Outlaws'], 'old town road']],
            medium: [['Name the song by Lewis Capaldi with these lyrics "I let my guard down, and then pulled the rug"?', ['Someone You Loved', 'Before You Go', "Don't Get Me Wrong", 'Lost On You'], 'someone you loved'], ['What is the name of the song by Megan Thee Stallion with these lyrics "Im a savage, classy, bougie, ratchet, sassy, moody, nasty"?', ['Savage', 'Cocky AF', 'Fkn Around', 'Ride Or Die'], 'savage'], ['What is the name of the song by Staind with these lyrics, "I never have the words to say to make it all just go away"?',['Believe', 'Addicted', 'Remedy', 'Denial'], 'believe'],
            ['Who is the artist that has a song "Feel Something" with these lyrics "Learning everything I know desperate for a change"',['Illenium', 'Incubus', 'I Prevail', 'Internet Money'], 'illenium']],
            hard: [['Who is the artist that has a song "Truth Hurts" with these lyrics "and thats the soooound of me not calling you back"?', ['Lizzo', 'Azjah', 'Dreezy', 'Cardi B'], 'lizzo'], ["Name the song by Skillet with these lyrics 'So here we go again, same fight we're always in. I don't care so why pretend, wake me when your lecture ends'?",["It's Not Me It's You", 'All The Same', "I'll Follow You", 'Snuff'], "it's not me it's you"]],
        },
        leadingRoles: {
            easy: [['Who was the female lead in "Pretty Woman"?', ['Julia Roberts', 'Sandra Bullock', 'Reese Witherspoon', 'Emma Stone'], 'julia roberts'], ['Who was the actor who played the male lead in "Field of Dreams"?', ['Tom Cruise', 'Kevin Costner', 'Bruce Willis', 'Mel Gibson'], 'kevin costner'], ['Who played Dominic Torretto in the fast and furious movies?', ['Vin Diesel', 'Paul Walker', 'Rick Yune', 'Ted Levine'], 'vin diesel'], ['Who played in "The Heat" co-staring Sandra Bullock?', ['Melissa McCarthy', 'Julia Roberts', 'Emma Roberts', 'Kirsten Bell'], 'melissa mccarthy']],
            medium: [['Who plays the male lead in "The Equalizer"?',['Bill Pullman', 'Will Smith', 'David Harbour', 'Denzel Washington'], 'denzel washington'], ['Who was the lead actor in the John Wick movies?',['Lawrence Fishburn', 'Dennis Hopper', 'Keanu Reeves', 'Jeff Daniels'], 'keanu reeves'], ['Who played Tim McGraws wife in "The Blind Side"?',['Lilly Collins', 'Kathy Bates', 'Sandra Bullock', 'Sissy Spacek'], 'sandra bullock'], ['Who played Seth Rogans wife on "Neighbors"?',['Liz Cackowski', 'Chloe Grace Moretz', 'Abbi Jacobson', 'Rose Byrne'], 'rose byrne']],
            hard: [['Who was the male lead in "10 things I Hate about You"?',['Heath Ledger','John Cena','Ben Affleck','Shamar Moore'], 'heath ledger'], ["Who was the male lead in the movie 'She's All That'?",['Freddy Prince Jr', 'Ben Affleck', 'Ryan Phillippe', 'Johnny Galecki'], 'freddy prince jr']]
        },
        cars: {
            easy: [["What device keeps a cars oil clean?",['Oil Filter', 'Oil Pan', 'Oil Pump', 'Oil Filler Cap'], 'oil filter'], ['What color was the first chevrolet camaro to come off the production line?',['Black', 'Red', 'Blue', 'Grey'], 'black'], ["In 2017 what was the worlds' second most valuable car company?",['Telsa', 'Ford', 'Chevrolet', 'GMC'], 'telsa'], ['What kind of car did the dukes of hazard drive?',['Charger', 'Mustang', 'Thunderbird', 'Javelin'], 'charger']],
            medium: [['How many hours did the Model T take to assemble between 1909 & 1927?',['12', '10', '5', '24'], '12'], ['An average car has how many parts?',['30,000', '50,000', '15,000','25,000'], '30,000'], ['What was the first mass produced automobile?',['Ford Model T', 'Ford Mustang', 'Corvette', 'GMC Model 9314'], 'ford model t'], ['Best selling car model today?',['Corolla', 'Mustang', 'Corvet', 'Silverado'], 'corolla']],
            hard: [['How much was the most expensive car ever sold at a public auction for? ___million',['30', '20', '50', '40'], '30'], ["The worlds' most expensive car is a rolls-royce sweptail. How much is it worth? ___million ",['13', '10', '5', '25'], '13 million']]
        },
        movieCriminals: {
            easy: [['He lives in the woods and is a great shooter',['Robin Hood', 'Will Scarlet', 'Friar Tuck', 'King Richard'], 'robin hood'], ['Sexy girl in a leather costume that had 9 lives',['Cat Women', 'Poison Ivy', 'Mary Marvel', 'Super Woman'], 'cat woman'], ["He has green hair and a permanent smile",['Joker', 'Bane', 'Dracula', 'Gearhead'], 'joker'], ['For many he is an entertainer, for kids he is a nightmare',['Pennywise', 'Bozo The Clown', 'Weary Willie', 'Otoo Griebling'], 'pennywise']],
            medium: [['Human flesh is a delicacy for him',['Hannibal Lecter', 'The Punisher', 'Galactus', 'Lex Luther'], 'hannibal lecter'], ['He likes to create puzzles and says "Do you want to play a game"',['Jigsaw', 'Penguin', 'The Riddler', 'Two Face'], 'jigsaw'], ['beautiful, wicked former psychiatrist with pink & blue hair',['Harely Quinn','Bat Girl', 'Poison Ivy', 'Cat Woman'], 'harely quinn'], ['Robert DeNiro played what gangster in the movie "The Untouchables"?',['Al Capone', 'Jimmy Malone', 'Eliot Ness', 'George Stone'], 'al capone']],
            hard: [["What's Denzel Washingtons' name in 'American Gangster'?",['Frank Lucas', 'Russel Lewis', 'JR Gooding', 'Jason Brolin'], 'frank lucas'], ['Nicolas Cage was a contract killer named what in the movie "Bangkok Dangerous"?',['Joe', 'John', 'Eric', 'Robert'], 'joe']]
        },
        movieQuotes: {
            easy: [["You talkin' to me?",['Taxi Driver', 'Die Hard', 'Misery', 'Downtown'], 'taxi driver'], ["You can't handle the truth!",['A Few Good Men', 'Malice', 'Moneyball','Goodfellas'], 'a few good men'], ["Mama always said like was like a box of chocolates. You never know what you're going to get.",['Forrest Gump', 'Sabrina', 'Ghost', 'Titanic'], 'forrest gump'], ["There's no place like home.",['The Wizard Of Oz', 'Casablanca', "It's a wonderful life", 'West Side Story'], "the wizard of oz"]],
            medium: [['You had me at hello.',['Collateral', 'Jerry McGuire', 'Valkyrie', 'Magnolia'], 'jerry mcguire'], ["Say 'hello' to my little friend",['Scarface', 'The Untouchables', 'Goodfellas', 'The Godfather'], 'scarface'], ["heeere's Johnny",['The Shining', 'The Stand', 'Carrie', 'Thinner'], 'the shining'], ["Nobody puts baby in a corner.",['Dirty Dancing', 'Footloose', 'Risky Business', 'Christine'], 'dirty dancing']],
            hard: [["I'll have what she's having.",['When Harry Met Sally', 'Sleepless In Seattle', "You've Got Mail", 'Love Story'], 'when harry met sally'], ["Im gonna make him an offer he can't refuse",['The Godfather', 'The Untouchables', 'Scarface', 'Goodfellas'], 'the godfather']]
        }
    }
}