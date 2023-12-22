'use client'
import React, { FormEvent } from 'react'
import {formDataImage} from './posts'
import axios from 'axios'

export default function page() {

  async function formDataImage() {
    const formData = new FormData()
    console.log(document.querySelector('#fileInput'))
    formData.append("image", document.querySelector('#fileInput').files[0])
  
    const response = await axios.post('http://localhost:9000/api/test/uploadImage', formData)
    console.log(response)
  
    const imgEle = document.querySelector('img');
    imgEle.setAttribute('src', `http://localhost:9000/${response.data.url}`)
    return false
  }

  return (
    <div className='form-js'>
       <h2>Form JavaScript</h2>
            <form id="formJs" method='post'>
                <label htmlFor="id-formJS">Id</label>
                <input type="number" id="id-formJS" name="id-formJS" readOnly />
                <br />
                <label htmlFor="title">Title</label>
                <input title="text" id="title" name="title" />
                <br />
                <label htmlFor="body">Body</label>
                <input type="text" id="body" name="body" />
                <br />
                <label htmlFor="userId">User Id</label>
                <input type="number" id="userId" name="userId"  value="1" readOnly />
                <br />
                  <div className="image">
                      <div className="d-flex justify-content-center" id="uploads-img">
                        <div className="circle"></div>
                            <img id="photo" src="https://cdn.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.webp" height="100%" width="100%" alt=""></img>
                            <img id="icon-camera" width="35" height="35" src="/camera-solid.svg" alt=""></img>
                            <input type="file" id="fileInput" />
                      </div>
                      <button type="button" id="btn-image" onClick={() => formDataImage()}>ตกลง</button>
                  </div>
                <br />
                <div className="d-flex flex-row justify-content-center">
                    <button type="button" id="btn-JSsubmit" >ยืนยัน</button>
                </div>
            </form>
            </div>
  )
}
