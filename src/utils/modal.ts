import * as tingleModule from 'tingle.js'

type ModalOptions = {
  onClose?: () => void
  beforeClose?: () => boolean
  cssClass?: string[]
}

type ModalInstance = {
  open: () => void
  setContent: (content: string) => void
}

type ModalConstructor = new (options: ModalOptions) => ModalInstance

type TingleLibrary = {
  modal?: ModalConstructor
  default?: { modal?: ModalConstructor }
}

const TRAILER_ID = 'trailer-modal'

// Opens a modal showing the markup of the hidden element with the same id.
export const openModal = (id: string) => {
  const library = tingleModule as unknown as TingleLibrary
  const Modal = library.modal ?? library.default?.modal

  if (!Modal) return

  const isTrailer = id === TRAILER_ID

  const modal = new Modal({
    onClose: () => {
      // Remove the trailer modal from the DOM so the video stops.
      if (isTrailer) document.querySelector('.tingle-modal--video')?.remove()
    },
    beforeClose: () => true,
    cssClass: [isTrailer ? 'tingle-modal--video' : 'tingle-modal--default'],
  })

  modal.open()

  const content = document.querySelector(`[data-modal-content="${id}"]`)
  modal.setContent(
    content ? content.innerHTML : '<h2 class="text-center text-upper">Unable to load content</h2>',
  )
}
