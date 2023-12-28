const Questions = [
    {
        'Question': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'C++',
        
    },
    {
        'Question': 'What does HTML stand for?',
        'a': 'Hyper Text Markup Language',
        'b': 'High Tech Modern Language',
        'c': 'Hyper Transfer Markup Language',
        'd': 'Hyperlink and Text Markup Language',
        
    },
    {
        'Question': 'How can you include an external CSS file in an HTML document?',
        'a': 'Using the style tag',
        'b': 'Using the link tag',
        'c': 'Using the css tag',
        'd': 'Using the external tag',
        
    },
    {
        'Question': 'Which keyword is used to declare variables in JavaScript?',
        'a': 'var',
        'b': 'int',
        'c': 'variable',
        'd': 'let',
        
    },
    {
        'Question': 'What is the purpose of the <head> element in HTML?',
        'a': 'It contains the main content of the document',
        'b': 'It defines the structure of the document',
        'c': 'It contains metadata about the document',
        'd': 'It specifies the layout of the document',
        
    },
    {
        'Question': 'How can you select an element with the id \'example\' in CSS?',
        'a': '#example',
        'b': '.example',
        'c': 'element.example',
        'd': '*example*',
        
    },
    {
        'Question': 'What is the purpose of the alert() function in JavaScript?',
        'a': 'It displays a message box with a specified message and an OK button',
        'b': 'It defines a variable',
        'c': 'It creates a loop in the code',
        'd': 'It imports external libraries',
        
    },
    {
        'Question': 'Which HTML tag is used to create a hyperlink?',
        'a': 'link',
        'b': 'href',
        'c': 'a',
        'd': 'hyperlink',
        
    },
    {
        'Question': 'How can you center an element horizontally in CSS?',
        'a': 'text-align: center;',
        'b': 'margin: auto;',
        'c': 'vertical-align: middle;',
        'd': 'center: true;',
        
    },
    {
        'Question': 'What does the === operator in JavaScript do?',
        'a': 'It assigns a value to a variable',
        'b': 'It checks for equality of both value and type',
        'c': 'It performs a logical AND operation',
        'd': 'It concatenates two strings',
        
    },
    {
        'Question': 'Which HTML tag is used to create an unordered list?',
        'a': 'list',
        'b': 'ul',
        'c': 'ol',
        'd': 'li',
        
    }
    
    
    
];

let index = 0;
let score = 0;

const quesBox = document.getElementById("quesBox");
const options = document.querySelectorAll('.options');
const scoreDisplay = document.getElementById("score");

const loadQuestion = () => {
    const data = Questions[index];
    quesBox.innerHTML = `${index + 1}. ${data.Question}<br><br>`;

    options.forEach((option, i) => {
        const label = document.querySelector(`label[for="option${i + 1}"]`);
        label.innerHTML = `${String.fromCharCode(97 + i)}) <span class="option-bubble"></span> ${data[String.fromCharCode(97 + i)]}`; 
        option.value = String.fromCharCode(97 + i); 
        option.checked = false;
    });
};





const checkAnswer = () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        if (selectedOption.value === Questions[index].correct) {
            score++;
        }

        index++;
        selectedOption.checked = false;

        if (index < Questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    } else {
        alert('Please select an option');
    }
};

const showScore = () => {
    quesBox.innerText = 'Quiz Completed!';
    document.querySelectorAll('.options').forEach(option => option.style.display = 'none');
    document.querySelector('.btn').style.display = 'none';
    scoreDisplay.innerText = `Your Score: ${score} out of ${Questions.length}`;
    scoreDisplay.style.display = 'block';
};

// Initial call
loadQuestion();


