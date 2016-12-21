import { each } from 'src/helpers/util'

export function filterByTag (nodes, tag) {
  const result = []
  each(nodes, node => {
    if (node.componentOptions && node.componentOptions.tag === tag) {
      result.push(node)
    }
  })
  return result
}

export function getProps (vm) {
  return vm.componentOptions.propsData
}
