let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];


let container = document.querySelector('.wrapper')
let inputElem = document.querySelector('input')
let divInputElem = document.querySelector('.search-input')
let divulElem = document.querySelector('.autocom-box')



inputElem.addEventListener('keyup' , function(){
    let inputValue = inputElem.value
    
    if(inputValue){
        divInputElem.classList.add('active')

        let filterWord = suggestions.filter(function(suggestion){
            return suggestion.toLowerCase().includes(inputValue.toLowerCase())
    })
    
    console.log(filterWord)

    filterWord.map(function(word){
        let newLi = document.createElement('li')
        newLi.innerHTML = word
        console.log(newLi)

        divulElem.append(newLi)
        console.log(divulElem)

        newLi.addEventListener('click', function() {
            inputElem.value = word; // Set input value to the clicked suggestion
            divInputElem.classList.remove('active'); // Optionally hide suggestions
            divulElem.innerHTML = ''; // Clear suggestions after selection
        });
    })
    }

    else{
        divInputElem.classList.remove('active')
    }
    

})