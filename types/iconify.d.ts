declare module '@iconify/vue2' {
  export const Icon: {
    new (): {
      $props: import('@iconify/vue2/dist/iconify').IconProps & { class?: any }
    }
  }

  export {
    addCollection,
    listIcons,
    loadIcons
  } from '@iconify/vue2/dist/iconify'
}
