// Функция подсчета карточек
function countPhotos() {
    let photos = document.querySelectorAll('.image-card');
    let counter = document.getElementById('image-counter');
    if (counter) { 
        counter.textContent = photos.length; 
    }
    console.log('Найдено фотографий:', photos.length);
}

// Управление лайками
function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;

    likeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let likesSpan = this.querySelector('.like-count');
            let currentLikes = parseInt(likesSpan.textContent) || 0;

            if (this.classList.contains('liked')) {
                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
                let icon = this.querySelector('i');
                if (icon) icon.className = 'far fa-heart';
            } else {
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
                let icon = this.querySelector('i');
                if (icon) icon.className = 'fas fa-heart';
            }

            likesSpan.textContent = currentLikes;
            if (totalLikesElement) {
                totalLikesElement.textContent = totalLikes;
            }

            this.style.transform = 'scale(1.2)';
            setTimeout(() => { this.style.transform = ''; }, 300);
        });
    });
}

// Установка текущего года в подвал
function updateYear() {
    let yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

// Запуск при полной загрузке DOM дерева
document.addEventListener('DOMContentLoaded', function() {
    console.log('Галерея загружена!');
    countPhotos();
    setupLikes();
    updateYear();

    let jsStatus = document.querySelector('.js-status');
    if (jsStatus) {
        jsStatus.textContent = 'JavaScript успешно активирован!';
        jsStatus.style.color = '#28a745';
    }
});
