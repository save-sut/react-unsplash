import React from 'react'
import Modal from 'react-awesome-modal'
import { Close } from '@material-ui/icons'

function ImageModal({ isVisible = false, imageUrl = '', onCloseModal }) {
    return (
        <Modal
            visible={isVisible}
            // className="flex-center"
            width="800"
            height="600"
            effect="fadeInUp"
            onClickAway={onCloseModal.bind(this)}>
            <div className="flex-center">
                <p>
                    <img className="image-modal" src={imageUrl} alt="image-modal" />
                </p>
                <div className="close-btn">
                    <a
                        onClick={onCloseModal.bind(this)}>
                        <Close style={{ color: 'red', fontSize: 18 }} />
                    </a>
                </div>
            </div>
        </Modal>
    )
}

export default ImageModal
