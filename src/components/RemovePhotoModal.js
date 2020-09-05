import React from 'react'
import Modal from 'react-awesome-modal'

function RemovePhotoModal({ isVisible = true, password, onChangePassword, onRemove,  onCloseModal }) {
    return (
        <Modal
            visible={isVisible}
            width="620"
            height="280"
            effect="fadeInUp"
            onClickAway={onCloseModal.bind(this)}>
            <div className="modal-container">
                <h2 className="title">Are you sure?</h2>
                <div>
                    <p className="label">
                        Password
                    </p>
                    <div className="modal-input-group">
                        <input value={password} type="password" placeholder="Password" onChange={e => onChangePassword(e)} />
                    </div>
                </div>
                <div className="button-group">
                    <div className="cancel-btn" onClick={onCloseModal.bind(this)}>
                        Cancel
                    </div>
                    <div className="remove-btn">
                        <button type="submit" onClick={() => onRemove()}>Delete</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default RemovePhotoModal
