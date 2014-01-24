var finalScoreSize = 140;
var scoreDelay = 25;
var scores = {
    '1' : {
        'quotes' : [
            {
                'dev' : '"Easy."',
                'po'  : '"This team is the best." *smiles*'
            },
            {
                'dev' : '"Nice."',
                'po'  : '"Nice."'
            }
        ],
        'speech' : [
            2300
        ]
    },
    '2' : {
        'quotes' : [
            {
                'dev' : '"Just a case of munging some data."',
                'po'  : '"I love this team. It really isn"t true what everyone says about them."'
            },
            {
                'dev' : '"Done. Move on."',
                'po'  : '"Done. Move on."'
            }
        ],
        'speech' : [
            2300
        ]
    },
    '3' : {
        'quotes' : [
            {
                'dev' : '"I wonder if we could get the PO to buy some Krispy Kremes?"',
                'po'  : '"I wonder when the greedy b*****s are going to ask me to buy food again?"'
            },
            {
                'dev' : '"I wish I"d not had those beers last night. At least nobody has noticed."',
                'po'  : '"Wow, he looks awful " and he stinks of beer. Let"s get this done as quickly as possible."'
            },
            {
                'dev' : '"Seems straightforward but time-consuming. Maybe that\'s one for the new guy."',
                'po'  : '"That story took me ages to write. I\'m glad it seems easier to implement."'
            }
        ],
        'speech' : [
            2300
        ]
    },
    '5' : {
        'quotes' : [
            {
                'dev' : '"I hope I get that one."',
                'po'  : '"I wonder who will pick that one up?"'
            },
            {
                'dev' : '"Maybe it was only really a 3?"',
                'po'  : '"I thought that would be an 8."'
            },
            {
                'dev' : '"Wow, everyone agrees it\'s a 5. We\'re like a well-oiled machine."',
                'po'  : '"Are they sizing everything at 5?"'
            },
            {
                'dev' : '"That\'ll be a lovely one to work on."',
                'po'  : '"I can\'t wait for that story to go live. It\'s going to make everyone\'s life so much easier."'
            }
        ],
        'speech' : [
            2300
        ]
    },
    '8' : {
        'quotes' : [
            {
                'dev' : '"A bit big, but not worth splitting."',
                'po'  : '"Hmm, I don"t think it"s that big, but I better not challenge another estimate."'
            },
            {
                'dev' : '"I hope I don"t end up with that story."',
                'po'  : '"The business is gonna be so happy when that one goes live."'
            },
            {
                'dev' : '"I thought the PO would struggle answering our questions about requirements, but they clearly know their stuff."',
                'po'  : '"Wow, they asked a lot of questions on that story. I\'m glad I went through this one with the stakeholders last night."'
            }
        ],
        'speech' : [
            2300
        ]
    },
    '13' : {
        'quotes' : [
            {
                'dev' : '"We should be able to break this down into 2 or 3 stories pretty easily."',
                'po'  : '"Oh no, they"re going to make us split up another story."'
            },
            {
                'dev' : '"Bless! Did the PO really think this one was going to be easy?"',
                'po'  : ' "Oh ****. If that"s 13 points, you want to see the next story!"'
            }
        ],
        'speech' : [
            2300
        ]
    },
    '20' : {
        'quotes' : [
            {
                'dev' : '"Does the PO not have any idea about the complexity of these requests?"',
                'po'  : '"I can"t believe such a simple request is 20 points! Isn"t it just a case of copy and paste " you know, ctrl + c, ctrl + v?"'
            },
            {
                'dev' : '"Whoa! That"s not a story, it"s an epic with 5 or 6 stories joined together."',
                'po'  : ' "Oh, here we go again!"'
            }
        ],
        'speech' : [
            2300
        ]
    },
    '?' : {
        'quotes' : [
            {
                'dev' : '"What is the PO talking about? Right, stop thinking about Star Wars and concentrate."',
                'po'  : '"Are they listening to me?"'
            },
            {
                'dev' : '"Is the PO for real? How the **** are we meant to size that?',
                'po'  : '"I thought they were meant to be the experts!"'
            }
        ],
        'speech' : [
            2300
        ]
    },
    'COFFEE' : {
        'quotes' : [
            {
                'dev' : '"Pleeeeease let me out of this room!!!!!"',
                'po'  : '"Pleeeeease let me out of this room!!!!!"'
            },
            {
                'dev' : '"I wonder when the NET-A-PORTER tech team is having their next hack day."',
                'po'  : '"I must place another order with NET-A-PORTER today"'
            },
            {
                'dev' : '"I think I"ll watch Star Wars tonight."',
                'po'  : '"What shall I have for dinner tonight?"'
            }
        ],
        'speech' : [
            2300
        ]
    },
};

$(function () {
    $('#score-content').hide();

    $('#ask-mike-button').click(function () {
        $('#mike-heard').hide();
        $('#retry-button').hide();
        $('#ask-mike-button').fadeOut();
        $('#score-content').fadeIn();
        var chosenOption = pickRandom();
        playSpeech(chosenOption);

        return false;
    });

    $('#retry-button').click(function () {
        $('#score-content').fadeOut();
        $('#ask-mike-button').fadeIn();

        return false;
    });

    $.keyframe.define([{
        name: 'speech',
        '0%': { 'bottom': '349px' },
        '10%': {
            'bottom': '359px',
            'transform': 'rotate(-7deg)'
        },
        '20%': { 'bottom': '349px' },
        '30%': {
            'bottom': '359px',
            'transform': 'rotate(2deg)'
        },
        '40%': { 'bottom': '349px' },
        '50%': {
            'bottom': '359px',
            'transform': 'rotate(5deg)'
        },
        '60%': { 'bottom': '349px' },
        '70%': {
            'bottom': '364px',
            'transform': 'rotate(-8deg)'
        },
        '80%': { 'bottom': '349px' },
        '90%': {
            'bottom': '359px',
            'transform': 'rotate(4deg)'
        },
        '100%': { 'bottom': '349px' }
    }]);
});

function playSpeech (score) {
    var randomSpeech = pickRandomElementOfArray(scores[ score ].speech);

    $('#mike-head').playKeyframe(
        'speech 1000 linear 0 infinite normal forwards'
    );

    setTimeout(function () { $('#mike-head').resetKeyframe() }, randomSpeech);
}

function pickRandom () {
    var randomScore = pickRandomElementOfArray(scores.keys);

    setTimeout(function () { advanceScore(0, randomScore, 0.05) }, scoreDelay);

    return randomScore;
}

function displayScore (score) {
    if (score == 'COFFEE') {
        $('#score').html('<i class="fa fa-coffee"></i>');
    }
    else {
        $('#score').html(score);
    }
}

function advanceScore (index, finalNumber, distance) {
    $('#score').css('font-size', Math.floor(finalScoreSize * distance) + 'px');
    $('#score').css('opacity', distance);

    if (distance < 1) {
        displayScore( scores[index] );

        distance += 0.05;
        index++;
        if (index > scores.length - 1) {
            index = 0;
        }

        setTimeout(function () { advanceScore(index, finalNumber, distance) }, scoreDelay);
    }
    else {
        displayScore( finalNumber );

        var heard = pickRandomElementOfArray(scores[ finalNumber ].quotes);
        $('#mike-heard-devs').html( heard.dev );
        $('#mike-heard-po').html( heard.po );

        $('#mike-heard').fadeIn('slow');

        setTimeout(function () { $('#retry-button').fadeIn('slow') }, 1000);
    }
}

function pickRandomElementOfArray (array) {
    return array[ Math.round(Math.random() * (array.length - 1)) ];
}
