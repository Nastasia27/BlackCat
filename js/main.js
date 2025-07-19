const container = document.getElementById('article-grid');
const pagination = document.getElementById('pagination');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-button-wrapper');
const closeBtn = document.getElementById('closeBtn');

dummyData.forEach(data => {
    const card = createCard(data)
    container.appendChild(card);
})

initPagination(pagination, totalPages);

pagination.addEventListener('click', function (e) {
    if (e.target.classList.contains('pagination-button')) {
        const buttons = pagination.querySelectorAll('.pagination-button');
        buttons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    }
})

burger.addEventListener('click', () => {
    menu.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
})



function createCard ({title, image, text}) {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
    imageWrapper.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const cardTitle = document.createElement('h3');
    const cardDescription = document.createElement('p');
    cardDescription.innerText = text.slice(0, 130);
    const cardButton = document.createElement('button');
    cardButton.classList.add('card-button');
    cardButton.innerText = 'Дивитись';
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardButton);

    card.appendChild(imageWrapper);
    card.appendChild(cardContent);

    return card; 
}

function initPagination(container, totalPages) {
    for (let i = 1; i <= totalPages; i++) {
        const paginationButton = document.createElement('button');
        paginationButton.textContent = i;
        paginationButton.className = 'pagination-button';

        if (i === 1) {
            paginationButton.classList.add('active');
        }

        container.appendChild(paginationButton);
    }
}
