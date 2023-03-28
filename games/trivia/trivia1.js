const questions = {
    geography: [
      {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Nagasaki"],
        answer: "Tokyo"
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Arabian", "Antarctic"],
        answer: "Sahara"
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: "Vatican City"
      },
      {
        question: "What is the highest mountain in the world?",
        options: ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
        answer: "Mount Everest"
      },
      {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile"
      }
    ],
    history: [
      {
        question: "Who was the first president of the United States?",
        options: ["John Adams", "George Washington", "Thomas Jefferson", "Abraham Lincoln"],
        answer: "George Washington"
      },
      {
        question: "In what year did World War II end?",
        options: ["1942", "1944", "1945", "1946"],
        answer: "1945"
      },
      {
        question: "What was the first country to circumnavigate the globe?",
        options: ["Portugal", "Spain", "England", "Netherlands"],
        answer: "Spain"
      },
      {
        question: "Who wasthe first person to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Alan Shepard"],
        answer: "Neil Armstrong"
       },
        {
        question: "What was the name of the ship that Christopher Columbus sailed on his first voyage to the New World?",
        options: ["Santa Maria", "Pinta", "Nina", "Mayflower"],
        answer: "Santa Maria"
        }
        ],
        science: [
        {
        question: "What is the atomic symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        answer: "Au"
        },
        {
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Heart", "Skin", "Liver"],
        answer: "Skin"
        },
        {
        question: "What is the name of the smallest bone in the human body?",
        options: ["Stapes", "Femur", "Tibia", "Humerus"],
        answer: "Stapes"
        },
        {
        question: "What is the chemical formula for water?",
        options: ["H2O2", "H2O3", "H2O4", "H2O"],
        answer: "H2O"
        },
        {
        question: "What is the hardest substance in the human body?",
        options: ["Enamel", "Bone", "Cartilage", "Tooth pulp"],
        answer: "Enamel"
        }
        ]
        };
        
        const form = document.querySelector('form');
        const gameDiv = document.getElementById('game');
        
        form.addEventListener('submit', function(event) {
        event.preventDefault();
        const subject = document.querySelector('input[name="subject"]:checked').value;
        const subjectQuestions = questions[subject];
        gameDiv.innerHTML = '';
        for (let i = 0; i < subjectQuestions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<h2>${subjectQuestions[i].question}</h2> <ul> <li>${subjectQuestions[i].options[0]}</li> <li>${subjectQuestions[i].options[1]}</li> <li>${subjectQuestions[i].options[2]}</li> <li>${subjectQuestions[i].options[3]}</li> </ul> `;
        const answer = subjectQuestions[i].answer;
        const lis = questionDiv.querySelectorAll('li');
        for (let j = 0; j < lis.length; j++) {
        lis[j].addEventListener('click', function() {
        if (this.innerText === answer) {
        this.style.backgroundColor = 'green';
        } else {
        this.style.backgroundColor = 'red';
        }
        for (let k = 0; k < lis.length; k++) {
        lis[k].style.pointerEvents = 'none';
        }
        });
        }
        gameDiv.appendChild(questionDiv);
        }
        gameDiv.style.display = 'block';
        });
  