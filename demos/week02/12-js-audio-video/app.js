console.log('Testing..')


const audio = document.getElementById('rain')
// 1. I need to select my button elements one by one
const playBtn = document.getElementById('play')
const stopBtn = document.getElementById('stop')
const pauseBtn = document.getElementById('pause')
const skipForward = document.getElementById('skipForward')
const skipBack = document.getElementById('skipBackward')


// 2. Add event listeners to each of my button
// add event listener is a method available on all DOM nodes
// first argument - what event in a string - 'click' 'mousedown' 'submit'
// second argument - a callback function, and in that function we write what we want to happen when the click happens

playBtn.addEventListener('click', function() {
    console.log('Hello')
    audio.play()
})


pauseBtn.addEventListener('click', function() {
    audio.pause()
})


stopBtn.addEventListener('click', function() {
    audio.pause()
    audio.currentTime = 0;
})


skipForward.addEventListener('click', function() {
    audio.currentTime = audio.currentTime + 10
    audio.currentTime += 10;
})

skipBack.addEventListener('click', function() {
    audio.currentTime -= 10
})