import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
  SetterOrUpdater
} from 'recoil'
import { Modal } from '../types'

export const modalState = atom({
  key: 'modal',
  default: null as Modal
})

export const useModal: () => Modal = () => useRecoilValue(modalState)
export const useSetModal: () => SetterOrUpdater<Modal> = () =>
  useSetRecoilState(modalState)
export const useModalState: () => [Modal, SetterOrUpdater<Modal>] = () =>
  useRecoilState(modalState)
