import React from 'react'
import { Modal } from 'react-bootstrap'
import logo from './two.jfif';
export default function Pop({ closeModal }) {
  return (
    <>
      <Modal.Body style={{background:"black"}}>
          <img src={logo}/>
      </Modal.Body>
    </>
  )
}