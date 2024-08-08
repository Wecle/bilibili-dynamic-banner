import defaultLayouts from './config/banner1.js'

function initLayouts () {
    console.dir(defaultLayouts, { depth: null })
    const root = document.getElementById('root')
    const animatedBanner = document.createElement('div')
    animatedBanner.className = 'animated-banner'

    defaultLayouts.forEach(layer => {
        const { type } = layer
        const layerElement = document.createElement('div')
        layerElement.className = 'layer'
        if (type === 'img') {

        }
    })
    root.appendChild(animatedBanner)
}

function playVideo () {
    const videos = document.querySelectorAll('video')
    videos.forEach(video => {
        video.muted = true
        video.play()
    })
}

window.onload = () => {
    initLayouts()
    playVideo()
}