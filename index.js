const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  return tutorials.map((sentence) => { 
    const words = sentence.split(' ')
    //console.log(words)
    const capitalizedWords = words.map((singularWord) => 
      singularWord.charAt(0).toUpperCase() + singularWord.slice(1)
    )
    //console.log(capitalizedWords)
    const finalString = capitalizedWords.join(' ')
    console.log(finalString)
    return finalString
    });
  
}
