import { getDefaultConfig } from '../utils/index.js'

// TODO: 增加最大位移区间
const defaultLayers = [
    getDefaultConfig('img', { height: 162, width: 1728 }, { offset: 0 }),
    getDefaultConfig('img', { height: 159, width: 1696 }, { offset: 10 }),
    getDefaultConfig('img', { height: 165, width: 1760 }, { offset: 10 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 30 }),
    getDefaultConfig('img', { height: 165, width: 1760 }, { offset: 30 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 300 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 30 }),
    getDefaultConfig('img', { height: 162, width: 1728 }, { offset: 80 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 120 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 80 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 100 }),
    getDefaultConfig('img', { height: 162, width: 1728 }, { offset: 130 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 200 }),
    getDefaultConfig('video', { height: 250, width: 100, translateX: 500 }, { offset: 20 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 300 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 280 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 300 }),
    getDefaultConfig('img', { height: 156, width: 1664 }, { offset: 350 }),
    getDefaultConfig('img', { height: 156, width: 1664, opacity: 0.5 }, { offset: 500 }),
    getDefaultConfig('video', { height: 270, width: 108, translateX: 216 }, { offset: 50 }),
    getDefaultConfig('video', { height: 500, width: 200, translateX: -700 }, { offset: 30 })
]

export default defaultLayers