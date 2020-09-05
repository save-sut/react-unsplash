import React from 'react'
import { Search } from '@material-ui/icons'

function Navbar({ keyword, onSearch, onChangeKeyword, onOpenModal }) {
    return (
        <header className="header">
            <div className="header-left">
                <img
                    src="/image/my_unsplash_logo.svg"
                    alt="logo"
                    className="header__logo"
                />
                <div className="header__search">
                    <div className="input-group">
                        <Search style={{ color: '#bdbdbd', fontSize: 24 }} />
                        <input
                            className="input--search"
                            value={keyword}
                            onChange={e => onChangeKeyword(e)}
                            type="text"
                            placeholder="Search"
                            onKeyDown={onSearch.bind(this)}
                        />
                    </div>
                </div>
            </div>

            <div className="header-right">
                <button className="btn btn-green" onClick={onOpenModal.bind(this)}>
                    Add a photo
                </button>
            </div>
        </header>
    )
}

export default Navbar