import defaultLayers from './config/banner1.js'
import { createElement } from './utils/index.js'

async function initLayouts () {
    const root = document.getElementById('root')
    const animatedBanner = createElement('div', {
        className: 'animated-banner'
    })

    defaultLayers.forEach((layer, key) => {
        const { type, defaultStyle, displayment } = layer
        const { height, width, translateX, translateY, rotate, scale, opacity } = defaultStyle
        const commonOptions = {
            height,
            width,
            'data-height': '300',
            'data-width': '3200',
            style: `height: ${height}px; width: ${width}px; transform: translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale}); opacity: ${opacity};`
        }

        const layerElement = createElement('div', {
            className: 'layer'
        })
        if (type === 'img') {
            const imgElement = createElement('img', {
                ...commonOptions,
                src: `images/banner1/${key + 1}.webp`
            })
            layerElement.appendChild(imgElement)
        } else {
            const videoElement = createElement('video', {
                ...commonOptions,
                loop: '',
                playsinline: '',
                src: `images/banner1/${key + 1}.webm`,
                style: 'object-fit: cover; ' + commonOptions.style
            })
            layerElement.appendChild(videoElement)
        }
        animatedBanner.appendChild(layerElement)
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