import React from 'react'
import Modal from 'react-awesome-modal'

function AddPhotoModal({ isVisible = true, label, url, onChangeLabel, onChangeUrl, onAddPhoto,  onCloseModal }) {
    return (
        <Modal
            visible={isVisible}
            width="620"
            height="370"
            effect="fadeInUp"
            onClickAway={onCloseModal.bind(this)}>
            <div className="modal-container">
                <h2 className="title">Add a new photo</h2>
                <div>
                    <p className="label">
                        Label
                    </p>
                    <div className="modal-input-group">
                        <input value={label} type="text" placeholder="Label" onChange={e => onChangeLabel(e)} />
                    </div>
                </div>
                <div>
                    <p className="label">
                        Photo URL
                    </p>
                    <div className="modal-input-group">
                        <input value={url} type="text" placeholder="Photo URL" onChange={e => onChangeUrl(e)} />
                    </div>
                </div>
                <div className="button-group">
                    <div className="cancel-btn" onClick={onCloseModal.bind(this)}>
                        Cancel
                    </div>
                    <div className="submit-btn">
                        <button type="submit" onClick={onAddPhoto.bind(this)}>Submit</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddPhotoModal
