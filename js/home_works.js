const gmailInput = document.querySelector('#gmail_input');
const gmailBtn = document.querySelector('#gmail_button');
const gmailRez = document.querySelector('#gmail_result');

const regex = /^\w+\@gmail.com$/

gmailBtn.addEventListener('click', () => {
    if(regex.test(gmailInput.value)) {
        gmailRez.style.color = 'green'
        gmailRez.innerHTML = 'valid'  
    } else {
        gmailRez.style.color = 'red'
        gmailRez.innerHTML = 'invalid'
    }
})




const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

const width = parentBlock.clientWidth - childBlock.clientWidth
const height = parentBlock.clientHeight - childBlock.clientHeight
// console.log(parentBlock);
let positionX = 0; let positionY = 0;
const animation = () => {
 if (positionX < width && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(animation)
 } else if (positionX >= width && positionY < height) {
    positionY++;
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(animation) 
 } else if (positionX > 0 && positionY >= height) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(animation)
 } else if (positionY > 0 && positionX <= 0) {
    positionY--;
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(animation) 
 } else {
    requestAnimationFrame(animation)
 }
};
animation()


const secNum = document.querySelector('#seconds');
const secStart = document.querySelector('#start')
const secStop = document.querySelector('#stop')
const secReset = document.querySelector('#reset')

let interval = null;
let count = 0;

secStart.addEventListener('click', () => {
    if(interval) return
    interval = setInterval(() => {
        count++;
        secNum.innerHTML = count;
    }, 1000)
}
);

secStop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
})

secReset.addEventListener('click', () => {
    clearInterval(interval)
    interval = null;
    count = 0;
    secNum.innerHTML = count;
})



//карточки с персонажами

const defaultImg = 'https://i.pinimg.com/736x/48/c0/25/48c025b5141b7dd6dea071d303bab220.jpg'
const charactersList = document.querySelector('.characters-list')

const charactersL = async() => {
    try {
        const response = await fetch('../data/characters.json')
        if(!response.ok) throw new Error("Ошибка загрузки данных");
        const characters = await response.json();
        characters.forEach((character) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'character-card')
        const image = character.photo || defaultImg
        card.innerHTML = `
            <div class="character-photo">
                <img src="${image}" alt="${character.name}">
            </div>
            <h3>${character.name || 'Unknown'}</h3>
            <span>${character.age || 'Age is unknown'}</span>
        `
        charactersList.append(card)
    });

    } catch (error) {
        console.error('Ошибка:', error);
        
    }
}
charactersL()

// const request = new XMLHttpRequest();
// const charactersList = document.querySelector('.characters-list')
// request.open('GET', '../data/characters.json');
// request.setRequestHeader('Content-Type', 'application/json')
// request.send();
// request.onload = () => {
//     const characters = JSON.parse(request.response)

//     characters.forEach((character) => {
//         const card = document.createElement('div')
//         card.setAttribute('class', 'character-card')
//         const image = character.photo || defaultImg
//         card.innerHTML = `
//             <div class="character-photo">
//                 <img src="${image}" alt="${character.name}">
//             </div>
//             <h3>${character.name}</h3>
//             <span>${character.age}</span>
//         `
//         charactersList.append(card)
//     });
// }


// const info = new XMLHttpRequest
// info.open('GET', '../data/bio.json')
// info.setRequestHeader('Content-Type', 'application/json')
// info.send()
// info.onload = () => {
//     const response = JSON.parse(info.response)
//     console.log(response);
    
// }      

const info = async() => {
    try {
const response = await fetch('../data/bio.json')
if (!response.ok) throw new Error("Ошибка загрузки данных");
const data = await response.json()
console.log(data);

    } catch (error) {
        console.log('Ошибка:', error);
    }
}

info()
