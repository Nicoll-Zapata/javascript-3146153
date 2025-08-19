const video = document.querySelector ('#video')
const play = document.querySelector ('#play-video')
const stopVideo = document.querySelector ('#stop-video')
const playStop1 = document.querySelector ('#play-stop-img1')
const playStop2 = document.querySelector ('#play-stop-img2')
const audio1 = document.querySelector ('#audio-1')
const audio2 = document.querySelector ('#audio-2')

function reproducirVideo () {
    video.play()
}

play.addEventListener ("click", reproducirVideo)


function pausarVideo () {
    video.pause()
}

stopVideo.addEventListener ("click", pausarVideo)

function toggleAudioUno () {

    if(audio1.paused){

        audio1.play()
        playStop1.textContent = "⏸️ Stop"

    }else{

        audio1.pause()
        playStop1.textContent = " ▶️ Play"
    }

}

playStop1.addEventListener ("click", toggleAudioUno)

function toggleAudioDos () {

    if(audio2.paused){

        audio2.play()
        playStop2.textContent = "⏸️ Stop"

    }else{

        audio2.pause()
        playStop2.textContent = " ▶️ Play"
    }
}

playStop2.addEventListener ("click", toggleAudioDos)