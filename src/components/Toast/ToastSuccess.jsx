import Toast from 'react-bootstrap/Toast'
import styles  from './toastSuccess.module.css'
function ToastSuccess({ title, text , showToast, handleClose}) {
    return (
        <div className={styles.toastContainer}>
            <Toast bg="success" show={showToast} onClose={handleClose}>
                <Toast.Header>
                    <strong className="me-auto">{title}</strong>
                </Toast.Header>
                <Toast.Body>{text}</Toast.Body>
            </Toast>
        </div>
    )
}

export default ToastSuccess
