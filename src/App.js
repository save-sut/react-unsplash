import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from './components/Image'
import Navbar from './components/Navbar'
import AddPhotoModal from './components/AddPhotoModal'
import RemovePhotoModal from './components/RemovePhotoModal'
import './css/app.scss'

const apiUrl = 'https://go-unsplash.herokuapp.com/api'

function App() {
    const [images, setImages] = useState([])
    const [label, setLabel] = useState('')
    const [url, setUrl] = useState('')
    const [password, setPassword] = useState('')
    const [keyword, setKeyword] = useState('')
    const [photoId, setPhotoId] = useState('')
    const [isVisibleAdd, setIsVisibleAdd] = useState(false)
    const [isVisibleRemove, setIsVisibleRemove] = useState(false)

    useEffect(() => {
      getAllPhoto()
    }, [])

    function getAllPhoto() {
        setLabel('')
        setUrl('')
        setKeyword('')

        const configGet = {
            method: 'get',
            url: `${apiUrl}/photo/all`,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        axios(configGet)
            .then((response) => setImages(response.data.Photos))
            .catch((error) => console.log(error))
    }
    function onChangeLabel(e) {
        setLabel(e.target.value)
    }

    function onChangeUrl(e) {
        setUrl(e.target.value)
    }

    function onChangeKeyword(e) {
        setKeyword(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onSearch(e) {
      if (e.key === 'Enter' && keyword !== '') {
        const configGet = {
            method: 'get',
            url: `${apiUrl}/photo/search/${keyword}`,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        axios(configGet)
            .then((response) => setImages(response.data.Photos))
            .catch((error) => console.log(error))
      } else if (e.key === 'Enter' && keyword === '') {
        getAllPhoto()
      }
    }

    function onAddPhoto() {
        let FormData = require('form-data')
        let data = new FormData()
        data.append('label', label)
        data.append('url', url)

        const config = {
            method: 'post',
            url: apiUrl + '/photo/add',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }
        axios(config)
            .then(() => {
                onCloseModal()
                getAllPhoto()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function onRemovePhoto() {
        let FormData = require('form-data')
        let data = new FormData()
        data.append('photo_id', photoId)

        const config = {
            method: 'delete',
            url: apiUrl + '/photo/' + password,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }
        axios(config)
            .then(() => {
                setPhotoId('')
                setPassword('')
                onCloseRemoveModal()
                getAllPhoto()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function onOpenModal() {
        setIsVisibleAdd(true)
    }

    function onCloseModal() {
        setIsVisibleAdd(false)
    }

    function onOpenRemoveModal(id) {
        setPhotoId(id)
        setIsVisibleRemove(true)
    }

    function onCloseRemoveModal() {
        setIsVisibleRemove(false)
    }

    return (
        <div className="App">
            <div className="container">
                <Navbar
                    keyword={keyword}
                    onSearch={onSearch.bind(this)}
                    onChangeKeyword={onChangeKeyword.bind(this)}
                    onOpenModal={onOpenModal.bind(this)}
                />
                <Image
                    images={images}
                    onOpenRemoveModal={onOpenRemoveModal.bind(this)}
                />
                <AddPhotoModal
                    isVisible={isVisibleAdd}
                    label={label}
                    url={url}
                    onChangeLabel={onChangeLabel.bind(this)}
                    onChangeUrl={onChangeUrl.bind(this)}
                    onAddPhoto={onAddPhoto.bind(this)}
                    onCloseModal={onCloseModal.bind(this)}
                />
                <RemovePhotoModal
                    isVisible={isVisibleRemove}
                    password={password}
                    onChangePassword={onChangePassword.bind(this)}
                    onRemove={onRemovePhoto.bind(this)}
                    onCloseModal={onCloseRemoveModal.bind(this)}
                />
            </div>
        </div>
    )
}

export default App
