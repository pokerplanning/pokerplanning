var scores =[1, 2, 3, 5, 8, 13, 20, '?', 'COFFEE'];
var finalScoreSize = 140;
var scoreDelay = 25;
var quotes = {
    '1' : [
        {
            'dev' : '"Easy."',
            'po'  : '"This team is the best." *smiles*'
        },
        {
            'dev' : '"Nice."',
            'po'  : '"Nice."'
        }
    ],
    '2' : [
        {
            'dev' : '"Just a case of munging some data."',
            'po'  : '"I love this team. It really isn"t true what everyone says about them."'
        },
        {
            'dev' : '"Done. Move on."',
            'po'  : '"Done. Move on."'
        }
    ],
    '3' : [
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
    '5' : [
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
    '8' : [
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
    '13' : [
        {
            'dev' : '"We should be able to break this down into 2 or 3 stories pretty easily."',
            'po'  : '"Oh no, they"re going to make us split up another story."'
        },
        {
            'dev' : '"Bless! Did the PO really think this one was going to be easy?"',
            'po'  : ' "Oh ****. If that"s 13 points, you want to see the next story!"'
        }
    ],
    '20' : [
        {
            'dev' : '"Does the PO not have any idea about the complexity of these requests?"',
            'po'  : '"I can"t believe such a simple request is 20 points! Isn"t it just a case of copy and paste " you know, ctrl + c, ctrl + v?"'
        },
        {
            'dev' : '"Whoa! That"s not a story, it"s an epic with 5 or 6 stories joined together."',
            'po'  : ' "Oh, here we go again!"'
        }
    ],
    '?' : [
        {
            'dev' : '"What is the PO talking about? Right, stop thinking about Star Wars and concentrate."',
            'po'  : '"Are they listening to me?"'
        },
        {
            'dev' : '"Is the PO for real? How the **** are we meant to size that?',
            'po'  : '"I thought they were meant to be the experts!"'
        }
    ],
    'COFFEE' : [
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
    ]
};

$(function () {
    $('#score-content').hide();

    $('#ask-mike-button').click(function () {
        $('#mike-heard').hide();
        $('#retry-button').hide();
        $('#ask-mike-button').fadeOut();
        $('#score-content').fadeIn();
        pickRandom();
    });

    $('#retry-button').click(function () {
        $('#score-content').fadeOut();
        $('#ask-mike-button').fadeIn();
    });
});

function pickRandom () {
    var randomScore = pickRandomElementOfArray(scores);

    setTimeout(function () { advanceScore(0, randomScore, 0.05) }, scoreDelay);
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

        var heard = pickRandomElementOfArray(quotes[ finalNumber ]);
        $('#mike-heard-devs').html( heard.dev );
        $('#mike-heard-po').html( heard.po );

        $('#mike-heard').fadeIn('slow');

        setTimeout(function () { $('#retry-button').fadeIn('slow') }, 1000);
    }
}

function pickRandomElementOfArray (array) {
    return array[ Math.round(Math.random() * (array.length - 1)) ];
}
