import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Alert({
    title,
    textBody,
    textSecondary,
    textPrimary,
    handleSecondary,
    handlePrimary,
}) {
    return (
        <div
            className="modal show"
            style={{ display: 'block'}}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{textBody}</p>
                </Modal.Body>

                <Modal.Footer>
                    <div onClick={handleSecondary}>
                        <Button variant="secondary">{textSecondary}</Button>
                    </div>
                    <div onClick={handlePrimary}>
                        <Button variant="primary">{textPrimary}</Button>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default Alert
