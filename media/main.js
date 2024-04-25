const messages = {
  quotes: [
    {
      quote: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs",
    },
    {
      quote:
        "The most important skill for a programmer is to effectively communicate with others.",
      author: "Yukihiro Matsumoto",
    },
    {
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House",
    },
    {
      quote:
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      author: "Martin Golding",
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
    },
    {
      quote:
        "The only way to learn a new programming language is by writing programs in it.",
      author: "Dennis Ritchie",
    },
    {
      quote: "The only way to go fast is to go well.",
      author: "Robert C. Martin",
    },
    {
      quote:
        "The most damaging phrase in the language is: 'It's always been done this way.'",
      author: "Grace Hopper",
    },
    {
      quote:
        "Learning to code is useful no matter what your career ambitions are.",
      author: "Arianna Huffington",
    },
    {
      quote:
        "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson",
    },
    {
      quote:
        "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
      author: "Mosher's Law of Software Engineering",
    },
    {
      quote:
        "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.",
      author: "Randall E. Stross",
    },
    {
      quote: "If you think math is hard, try web design.",
      author: "Trish Parr",
    },
    {
      quote:
        "The strength of JavaScript is that you can do anything. The weakness is that you will.",
      author: "Reg Braithwaite",
    },
    {
      quote: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman",
    },
    {
      quote: "When in doubt, use brute force.",
      author: "Ken Thompson",
    },
    {
      quote: "Code never lies, comments sometimes do.",
      author: "Ron Jeffries",
    },
    {
      quote:
        "Without requirements or design, programming is the art of adding bugs to an empty text file.",
      author: "Louis Srygley",
    },
    {
      quote:
        "Optimism is an occupational hazard of programming: feedback is the treatment.",
      author: "Kent Beck",
    },
    {
      quote:
        "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      author: "Bill Gates",
    },
    {
      quote:
        "Programming is like sex. Make one mistake and you have to support it for the rest of your life.",
      author: "Michael Sinz",
    },
    {
      quote:
        "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
      author: "Tom Cargill",
    },
    {
      quote:
        "I'm not a great programmer; I'm just a good programmer with great habits.",
      author: "Kent Beck",
    },
    {
      quote:
        "Walking on water and developing software from a specification are easy if both are frozen.",
      author: "Edward V. Berard",
    },
    {
      quote: "Make it work, make it right, make it fast.",
      author: "Kent Beck",
    },
    {
      quote:
        "A language that doesn't affect the way you think about programming is not worth knowing.",
      author: "Alan Perlis",
    },
    {
      quote: "Programming is not about typing, it's about thinking.",
      author: "Rich Hickey",
    },
    {
      quote:
        "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
      author: "John Romero",
    },
    {
      quote:
        "One of the best programming skills you can have is knowing when to walk away for awhile.",
      author: "Oscar Godson",
    },
    {
      quote:
        "The next best thing to having good ideas is recognizing good ideas from your users. Sometimes the latter is better.",
      author: "Eric S. Raymond",
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
    {
      quote:
        "The key to performance is elegance, not battalions of special cases.",
      author: "Jon Bentley and Doug McIlroy",
    },
    {
      quote: "Good software, like wine, takes time.",
      author: "Joel Spolsky",
    },
    {
      quote: "Real programmers can write assembly code in any language.",
      author: "Larry Wall",
    },
    {
      quote:
        "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
      author: "Seymour Cray",
    },
    {
      quote:
        "Programming can be fun, so can cryptography; however they should not be combined.",
      author: "Kreitzberg and Shneiderman",
    },
    {
      quote: "Testing leads to failure, and failure leads to understanding.",
      author: "Burt Rutan",
    },
    {
      quote:
        "Programming isn’t about what you know; it’s about what you can figure out.",
      author: "Chris Pine",
    },
    {
      quote: "If you automate a mess, you get an automated mess.",
      author: "Rod Michael",
    },
    {
      quote: "The best way to get a project done faster is to start sooner.",
      author: "Jim Highsmith",
    },
    {
      quote:
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      author: "Patrick McKenzie",
    },
    {
      quote:
        "In order to understand recursion, one must first understand recursion.",
      author: "Anonymous",
    },
    {
      quote: "Weeks of coding can save you hours of planning.",
      author: "Anonymous",
    },
    {
      quote: "The only valid measurement of code quality: WTFs/minute.",
      author: "Anonymous",
    },
    {
      quote: "The best code is no code at all.",
      author: "Anonymous",
    },
    {
      quote:
        "The best programmers are lazy. They will try to find the easiest way to do something, which means less code to maintain.",
      author: "Anonymous",
    },
    {
      quote: "Code never lies, but comments sometimes do.",
      author: "Anonymous",
    },
    {
      quote:
        "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
      author: "Antoine de Saint-Exupery",
    },
    {
      quote: "Coding is not just code, that is a live thing to serve everyone!",
      author: "Ming Song",
    },
    {
      quote:
        "A good programmer is someone who always looks both ways before crossing a one-way street.",
      author: "Doug Linder",
    },
  ],
};

const button = document.querySelector(".fancy-button");

const quotes = messages.quotes;

(function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quotesContainer = document.querySelector(".fancy-box");
  const quoteElement = document.createElement("p");
  quoteElement.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;

  quotesContainer.innerHTML = "";
  quotesContainer.appendChild(quoteElement);
})();

button.onclick = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quotesContainer = document.querySelector(".fancy-box");
  const quoteElement = document.createElement("p");
  quoteElement.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;

  quotesContainer.innerHTML = "";
  quotesContainer.appendChild(quoteElement);
};
