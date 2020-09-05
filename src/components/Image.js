import React from 'react'

function Image({ images, onOpenRemoveModal }) {
    return (
        <>
            <div className="grid">
                {images.length > 0 && images.map((image) => (
                    <div key={image._id} className="grid-item">
                        <div className="button-del">
                            <button className="btn-del" onClick={() => onOpenRemoveModal(image._id)}>
                                delete
                            </button>
                        </div>
                        <img src={image.url} alt={image.label} />
                        <div className="description">
                            <h2>{image.label}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Image
