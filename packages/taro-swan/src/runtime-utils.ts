
import { initNativeApi } from './apis'

export { initNativeApi }
export * from './components'
export * from './apis-list'
export const hostConfig = {
  initNativeApi,
  getPathIndex (indexOfNode) {
    return `${indexOfNode}`
  },
  getSpecialNodes (): string[] {
    return ['text', 'image']
  },
  modifyTaroEvent (event, node) {
    if (node.tagName === 'MAP' && event.type === 'regionchange') {
      event.type = 'end'
    }
  },
  getMiniLifecycle (config) {
    config.page[0] = 'onInit'
    return config
  }
}
