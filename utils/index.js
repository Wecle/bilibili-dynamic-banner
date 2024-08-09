/**
 * @param {*} type layout 类型
 * @param {*} defaultStyle 默认样式
 * @param {*} translate 位移方向
 */
function getDefaultConfig (type = 'img', defaultStyle = {}, translate = {}) {
    return {
        type,
        defaultStyle: {
            height: 0,
            width: 0,
            translateX: 0,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            ...defaultStyle
        },
        translate: {
            direction: 'x',
            offset: 300,
            ...translate
        }
    }
}

function createElement (tagName, options) {
    const element = document.createElement(tagName)
    Object.keys(options).forEach(key => {
        element[key] = options[key]
    })
    return element
}

export {
    getDefaultConfig,
    createElement
}