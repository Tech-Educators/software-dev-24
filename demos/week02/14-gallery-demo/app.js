const thumbnailsContainer = document.querySelector('.thumbnails')
const bigDisplay = document.getElementById('bigDisplay')


const images = [
    {
        src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'El Capitan on a sunny afternoon'
    },
    {
        src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A foggy forest in Adjara, Georgia'
    },
    {
        src: 'https://images.unsplash.com/photo-1539477857993-860599c2e840?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Some flowers in Shibuya-ku, Japan'
    }
]

function createThumbnails() {
    // images.forEach(function(image) {
    //     // create our image element
    //     const imageElement = document.createElement('img')
        
    //     // set the imageElement to have the same data as my image object
    //     imageElement.src = image.src
    //     imageElement.alt = image.alt


    //     thumbnailsContainer.append(imageElement)
    // })

    // An *ALTERNATE* way of writing the loops
    for (let i = 0; i < images.length; i++) {
        const imgElemen = document.createElement('img')
        imgElemen.src = images[i].src
        imgElemen.alt = images[i].alt

        imgElemen.addEventListener('click', function() {
            console.log(images[i])
            createBigImage(images[i])
        })

        thumbnailsContainer.append(imgElemen)
    }
}

createThumbnails()

function createBigImage(imageData) {
    // clear the big Diplsay everytime this functions runs
    bigDisplay.innerHTML = ''
    // 1. make an image tag
    const bigImage = document.createElement('img')

    bigImage.src = imageData.src
    bigImage.alt = imageData.alt

    bigDisplay.append(bigImage)
}

// const myImageData = {
//     src: 'https://images.unsplash.com/photo-1539477857993-860599c2e840?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     alt: 'japan'
// }




// function FiveAddFive(a) {
//     return 5 + a
// }

// FiveAddFive(10)