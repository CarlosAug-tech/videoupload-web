import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../../services/api';

import { Container, Content } from './styles';
import { addVideoRequest } from '../../../store/modules/video/actions';

import noThumbnailImage from '../../../assets/Image/no-thumbnail.jpg';

export default function AddVideo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [previewVideo, setPreviewVideo] = useState('');
  const [fileVideo, setFileVideo] = useState('');

  const [previewImage, setPreviewImage] = useState('');
  const [fileImage, setFileImage] = useState(null);

  const dispatch = useDispatch();

  async function handleChangeVideo(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFileVideo(id);
    setPreviewVideo(url);
  }

  async function handleChangeImage(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFileImage(id);
    setPreviewImage(url);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      thumb_id: fileImage,
      file_id: fileVideo,
      title,
      description,
    };

    dispatch(addVideoRequest(data));
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h2>Adicionar novo video</h2>
          <label htmlFor="thumbnailVideo">
            <img
              src={(previewImage && previewImage) || noThumbnailImage}
              alt=""
            />
            <input
              id="thumbnailVideo"
              type="file"
              onChange={handleChangeImage}
              accept="image/*"
            />
          </label>
          <label htmlFor="fileVideo">
            {previewVideo ? (
              <video src={previewVideo} controls></video>
            ) : (
              <span>Upload do video</span>
            )}
            <input
              id="fileVideo"
              type="file"
              onChange={handleChangeVideo}
              accept="video/*"
            />
          </label>
          <div>
            <input
              type="text"
              placeholder=" "
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label htmlFor="">Título:</label>
            <span>
              <i></i>
            </span>
          </div>
          <div>
            <input
              type="text"
              placeholder=" "
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <label htmlFor="">Descrição:</label>
            <span>
              <i></i>
            </span>
          </div>
          <button type="submit">Adicionar Video</button>
        </form>
      </Content>
    </Container>
  );
}
