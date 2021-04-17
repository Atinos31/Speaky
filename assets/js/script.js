const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

//create an array of data
const data = [{
        image: 'assets/images/food.jpg',
        text: 'I am Hungry'
    },
    {
        image: 'assets/images/drink.jpg',
        text: "I am Thirsty"
    },
    {
        image: 'assets/images/tired.jpg',
        text: "I am tired"
    },
    {
        image: 'assets/images/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: 'assets/images/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: 'assets/images/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: 'assets/images/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: 'assets/images/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: 'assets/images/sick.jpg',
        text: "I feel Sick"
    },
    {
        image: 'assets/images/playground.jpg',
        text: 'I Want To Go The Playground'
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

    //pull image from the text and the item
    const { image, text } = item;

    box.classList.add('box');
    box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>`;
    // speak event
    main.appendChild(box);
}