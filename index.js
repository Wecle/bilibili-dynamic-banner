import { createElement } from './utils/index.js'

const banners = ['banner1']

function addMoveListener (banner, layers) {
    const bannerWidth = banner.offsetWidth
    const bannerLeft = banner.offsetLeft
    let initMouseLeft = 0

    function calcutedPosition (mouseLeft, scale) {
        return -(mouseLeft - initMouseLeft) * scale / bannerWidth
    }

    function startListener () {
        banner.addEventListener('mousemove', function (event) {
            event.stopPropagation()
            const mouseLeft = event.pageX - bannerLeft
            layers.forEach(layer => {
                const { defaultStyle, element, translate } = layer
                // 计算偏移
                const offset = calcutedPosition(mouseLeft, translate.offset)
                let styleResult = `height: ${defaultStyle.height}; width: ${defaultStyle.width}; opacity: ${defaultStyle.opacity}; object-fit: cover;`

                if (translate.direction === 'y') {
                    styleResult += `transform: translate(${defaultStyle.translateX}px, ${defaultStyle.translateY - offset}px) rotate(${defaultStyle.rotate}deg) scale(${defaultStyle.scale});`
                } else {
                    styleResult += `transform: translate(${defaultStyle.translateX - offset}px, ${defaultStyle.translateY}px) rotate(${defaultStyle.rotate}deg) scale(${defaultStyle.scale});`
                }
                element.style = styleResult
            })
        })
    }

    function clearListener () {
        const mouseLeft = event.pageX - bannerLeft

        layers.forEach(layer => {
            const { defaultStyle, element, translate } = layer
            // 计算偏移
            const offset = calcutedPosition(mouseLeft, translate.offset)
            // TODO: 使用 requestAnimationFrame 保证动画流畅
            let startValue = offset
            let endValue = 0
            let duration = 500 // 总时间，单位为毫秒
            let interval = 50 // 每次更新的间隔时间，单位为毫秒
            let steps = duration / interval // 总步数
            let stepValue = (startValue - endValue) / steps // 每一步的值变化量

            let currentValue = startValue

            let timer = setInterval(() => {
                currentValue -= stepValue
                let styleResult = `height: ${defaultStyle.height}; width: ${defaultStyle.width}; opacity: ${defaultStyle.opacity}; object-fit: cover;`;

                if (translate.direction === 'y') {
                    styleResult += `transform: translate(${defaultStyle.translateX}px, ${defaultStyle.translateY - currentValue}px) rotate(${defaultStyle.rotate}deg) scale(${defaultStyle.scale});`
                } else {
                    styleResult += `transform: translate(${defaultStyle.translateX - currentValue}px, ${defaultStyle.translateY}px) rotate(${defaultStyle.rotate}deg) scale(${defaultStyle.scale});`
                }

                if (Math.abs(currentValue - endValue) < Math.abs(stepValue)) {
                    clearInterval(timer)
                    styleResult = `transform: translate(${defaultStyle.translateX}px, ${defaultStyle.translateY}px) rotate(${defaultStyle.rotate}deg) scale(${defaultStyle.scale});`
                }
                element.style = styleResult
            }, interval)
        })
    }

    banner.addEventListener('mouseenter', function (event) {
        event.stopPropagation()
        // 计算初始鼠标 x 位置
        initMouseLeft = event.pageX - bannerLeft
        // 开始监听偏移量
        startListener()
    })

    banner.addEventListener('mouseleave', function (event) {
        event.stopPropagation()
        clearListener()
    })
}

async function initLayouts () {
    const root = document.getElementById('root')
    for (const banner of banners) {
        const animatedBanner = createElement('div', {
            className: 'animated-banner'
        })
        const defaultLayers = await import(`./config/${banner}.js`)
        defaultLayers.default.forEach((layer, key) => {
            const { type, defaultStyle } = layer
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
                    src: `images/${banner}/${key + 1}.webp`
                })
                layer.element = imgElement
                layerElement.appendChild(imgElement)
            } else {
                const videoElement = createElement('video', {
                    ...commonOptions,
                    autoplay: true,
                    loop: '',
                    playsinline: '',
                    src: `images/${banner}/${key + 1}.webm`,
                    style: 'object-fit: cover; ' + commonOptions.style
                })
                layer.element = videoElement
                layerElement.appendChild(videoElement)
            }
            animatedBanner.appendChild(layerElement)
        })
        root.appendChild(animatedBanner)
        addMoveListener(animatedBanner, defaultLayers.default)
    }
}

function playVideo () {
    const videos = document.querySelectorAll('video')
    videos.forEach(video => {
        video.muted = true
        video.play()
    })
}

window.onload = async () => {
    await initLayouts()
    playVideo()
}