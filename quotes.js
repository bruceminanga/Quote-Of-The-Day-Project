//Use an array to hold the value of the quotes
// arrayOfQuotes is a list/array of objects
const arrayOfQuotes = [
    {'author': 'Geoffrey Geist', 
     'quote': 'The only way to making this world a better place is to respect each other.'
    },
    {'author': 'Machael Jackson', 
     'quote': 'If you wanna make the world a better place take a look at yourself and then make a change.'
    },
    {'author': 'Katharine Hepburn', 
     'quote': 'Life is difficult. After all, it kills you.'
    },
    {'author': 'Biz Privy', 
     'quote': "One day you will wake up and there won't be any more time to do the things you've always wanted, do it now."
    },
    {'author': 'Jenny Lind', 
     'quote': 'When you are careless with other people, you bring ruin upon yourself.'
    },
    {'author': 'Dave Matthews', 
     'quote': 'To change the world, begin with one step. However small, the first step is hardest of all.'
    },
];

function generateQuote(){
  // Math.random() to take random number.
  //  parseInt method parses a value as a string and returns the first integer
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
  // dollar sign here is used Embed a value from a javaScript variable in a string.
  // .quote to take the quote property
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
