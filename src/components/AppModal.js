import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default function AppModal(props) {

	const { isOpen, toggle, modalMsg } = props;
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<ModalBody>
				{modalMsg}
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={toggle}>Okay</Button>
			</ModalFooter>
		</Modal>
	)
}
