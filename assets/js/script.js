const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

// second  text area and speak button
const textArea = document.getElementById('textInput');
const speakBtn = document.getElementById('speakBtn')

//const tts = window.speechSynthesis;

//creating an array of data to add images
const data = [{
        image: 'assets/images/food.jpg',
        text: "I'm Hungry "
    },
    {
        image: 'assets/images/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: 'assets/images/happy.jpg',
        text: " I'm Happy"
    },
    {
        image: 'assets/images/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: 'assets/images/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: 'assets/images/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: 'assets/images/sick.jpg',
        text: "I feel Sick"
    },
    {
        image: 'assets/images/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: 'assets/images/playground.jpg',
        text: 'I Want To Go To The Playground'
    },
    {
        image: 'assets/images/home.jpg',
        text: 'I Want To Go Home'
    },
    {
        image: 'assets/images/school.jpg',
        text: 'I Want To Go To School'
    },
    {
        image: 'assets/images/grandma.jpg',
        text: 'I Want To Go To Grandmas'
    }
];

//loop through

data.forEach(createBox);

// creating speech boxes
function createBox(item) {
    const box = document.createElement('div');

    //put image and text to create an item
    const { image, text } = item;

    box.classList.add('box');
    box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>`;

    // addition of speak event
    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();

        //adding active effect to the image box
        box.classList.add('active');
        //remove the  active class right after it been clicked or used
        setTimeout(() => box.classList.remove('active'), 1000);

    });
    main.appendChild(box);
}
// Initiate speech synthesis
const message = new SpeechSynthesisUtterance();


// array  to store voices from speech synthesis api
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();



    //loop through voices
    voices.forEach(voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voiceSelect.appendChild(option);
    });
}
// setting the text function
function setTextMessage(text) {
    message.text = text;
}

// text to be spoken
function speakText() {
    speechSynthesis.speak(message);
}

//set voice
function setVoice(e) {
    message.voice = voices.find(voice.name === e.target.value);
}
//when voices are changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// add event listener tp speak button

//toggle text box functionality
toggleBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.toggle('show')
);

// Close button
closeBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.remove('show')
);

//read button functionality
readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();

});
speakBtn.addEventListener('click', () => {
    setTextMessage(textArea.value);
    speakText();

});
//change voice
voiceSelect.addEventListener('change', setVoice);

//getVoices function called
getVoices();