
const imageContainer = document.querySelector('.image-container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    imageNum = 10;
    addNewImage()

})
function addNewImage() {
    for (let index = 0; index < imageNum; index++) {
        const NewImage = document.createElement('img');
        NewImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        imageContainer.appendChild(NewImage)
    }


}