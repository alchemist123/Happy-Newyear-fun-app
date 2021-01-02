
import React from 'react'
import { Modal,Button } from 'react-bootstrap'
import LinearIndeterminate from './LinearIndeterminate'
export default function Pop({ closeModal }) {
const count=0
  return (
    <>
      <Modal.Body style={{background:"black"}}>
         <LinearIndeterminate/><br/>
          <Button onClick={closeModal}>close</Button>
      </Modal.Body>
    </>
  )
}