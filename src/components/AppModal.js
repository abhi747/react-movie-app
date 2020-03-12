import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default function AppModal(props) {

	const { isOpen, toggleModal, modalMsg } = props;
	return (
		<Modal isOpen={isOpen} toggle={toggleModal}>
			<ModalBody>
				{modalMsg}
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={toggleModal}>Okay</Button>
			</ModalFooter>
		</Modal>
	)
}
