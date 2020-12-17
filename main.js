'use strict';
import images from './data-img.js';

const imageContainer = document.querySelector('.image_container')

function toggleImage() {
    const imgEl = document.querySelector('.dani')
    const index = getRandomImage()
    imgEl.setAttribute('src', images[index].src)
    imgEl.setAttribute('alt', images[index].alt)

}

function getRandomImage() {
    return Math.floor(Math.random() * Math.floor(images.length))
}

imageContainer.addEventListener('click', toggleImage)