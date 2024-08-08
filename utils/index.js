/**
 * @param {*} type layout 类型
 * @param {*} defaultStyle 默认样式
 * @param {*} displayment 位移方向
 */
function getDefaultConfig (type = 'img', defaultStyle = {}, displayment = {}) {
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
        displayment: {
            direction: 'x',
            distanceOffset: 300,
            ...displayment
        }
    }
}

export {
    getDefaultConfig
}