import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../../services/api';

import { Container, Content } from './styles';
import { editVideoRequest } from '../../../store/modules/video/actions';

import noThumbnailImage from '../../../assets/Image/no-thumbnail.jpg';

export default function EditVideo({ match }) {
  const { id } = match.params;
  const oldVideo = useSelector((state) => state.video.videoFile);

  const [title, setTitle] = useState((oldVideo && oldVideo.title) || '');
  const [description, setDescription] = useState(
    (oldVideo && oldVideo.description) || ''
  );

  const [previewVideo, setPreviewVideo] = useState('');
  const [fileVideo, setFileVideo] = useState(
    (oldVideo && oldVideo.file_video && oldVideo.file_video.id) || ''
  );

  const [previewImage, setPreviewImage] = useState(
    (oldVideo && oldVideo.thumbnail && oldVideo.thumbnail.url) ||
      noThumbnailImage
  );
  const [fileImage, setFileImage] = useState(
    (oldVideo && oldVideo.thumbnail && oldVideo.thumbnail.id) || null
  );

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
      id,
      thumb_id: fileImage,
      file_id: fileVideo,
      title,
      description,
    };

    dispatch(editVideoRequest(data));
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h2>Editar video</h2>
          <label htmlFor="thumbnailVideo">
            <img src={previewImage} alt="" />
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
              <span>Upload novo video</span>
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
          <button type="submit">Editar Video</button>
        </form>
      </Content>
    </Container>
  );
}
