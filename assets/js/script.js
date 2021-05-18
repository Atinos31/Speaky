// Initialize SpeechSynthesis API
const speechSynthesis = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#textInput');
const voiceSelect = document.querySelector('#voice-select');
const main = document.querySelector('main');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const speakBtn = document.getElementById('speak');

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
        text: 'I Want To Go To Grandmas',



    }
];

//image and text section

data.forEach(createBox);

// creating speech boxes
function createBox(item) {
    const box = document.createElement('div');

    //put image and text to create an item
    const {
        image,
        text
    } = item;

    box.classList.add('box');
    box.innerHTML = `
<img src="${image}" alt="${text}" />
<p class="info">${text}</p>`;

    // addition of speak event
    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();

        //adding active effect/class thats is style in css, to the image box
        box.classList.add('active');
        //remove the  active class right after it been clicked or used
        setTimeout(() => box.classList.remove('active'), 1000);

    });
    main.appendChild(box);
}



//Browser identifier
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// store voices 
let voices = [];

const getVoices = () => {
    voices = speechSynthesis.getVoices();

    // Loop through voices and create an option for each one
    voices.forEach(voice => {
        // Create option element
        const option = document.createElement('option');
        // Fill option with voice and language
        option.textContent = voice.name + '(' + voice.lang + ')';

        // Set needed option attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
};

const message = new SpeechSynthesisUtterance(textForm.value);

// setting the text function
function setTextMessage(text) {
    message.text = text;
}

// text to be spoken
function speakText() {
    speechSynthesis.speak(message);
}
//Line 35, 36 causes voice list duplication
getVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoices;
}

//Fix for duplication, run code depending on the browser
if (isFirefox) {
    getVoices();
}
if (isChrome) {
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = getVoices;
    }
}

// Speak
const speak = () => {
    // Check if speaking
    if (speechSynthesis.speaking) {
        console.log('Already speaking...');
        return;
    }

    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);


    // Speak end
    speakText.onend = e => {
        console.log('Done speaking...');

    };

    // Speak error
    speakText.onerror = e => {
        // alert('Something went wrong, please refresh the page');
    };

    // Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
        'data-name');

    // Loop through voices
    voices.forEach(voice => {
        if (voice.name === selectedVoice) {
            speakText.voice = voice;
        }
    });

    // Speak
    speechSynthesis.speak(speakText);
};

// EVENT LISTENERS
// Text form submit
textForm.addEventListener('submit', e => {
    e.preventDefault();
    speak();
    textInput.blur();
});

// Voice select change
voiceSelect.addEventListener('change', e => speak());
speechSynthesis.addEventListener('voiceschanged', getVoices);

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
    setTextMessage(value);
    speakText();

});
// speak btn
speakBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();
});