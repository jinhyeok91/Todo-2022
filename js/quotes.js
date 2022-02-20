const quotes = [
  {
    quote: "The way to get started is \n to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it \n living someone else's life.\n Don't be trapped by dogma \n which is living with the results of\n other people's thinking. ",
    author: "Steve Jobs.",
  },
  {
    quote: "The way to get started is \n to quit talking and begin doing ",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The greatest glory in living lies not \n in never falling, but in rising \nevery time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "If you look at what you have in life, \n you'll always have more. \n If you look at what you don't have in life,\n you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high \nand it's a failure, you will fail \nabove everyone else's success.",
    author: "James Cameron",
  },
  {
    quote: "Life is what happens \nwhen you're busy making other plans.",
    author: "john Lennon",
  },
];

const quote = document.querySelector("#quote span:first-child ");
const author = document.querySelector("#quote span:last-child ");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
