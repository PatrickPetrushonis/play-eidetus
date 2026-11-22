import type { ReactNode } from 'react'
import { openModal } from '../utils/modal'

type ModalButtonProps = {
  modalId: string
  children: ReactNode
}

// Button that opens the modal whose ModalContent has the same id.
export const ModalButton = ({ modalId, children }: ModalButtonProps) => (
  <a className="button" onClick={() => openModal(modalId)}>
    {children}
  </a>
)

type ModalContentProps = {
  modalId: string
  children: ReactNode
}

// Hidden markup that is copied into the modal when it opens.
export const ModalContent = ({ modalId, children }: ModalContentProps) => (
  <div className="hide" data-modal-content={modalId}>
    {children}
  </div>
)
