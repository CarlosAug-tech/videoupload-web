import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '../../store/modules/user/actions';

import api from '../../services/api';

import avatarNoImage from '../../assets/Image/avatarNoImage.png'

import { Container, Content } from './styles';

export default function EditVideo() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [avatarFile, setAvatarFile] = useState();
  const [previewAvatar, setPreviewAvatar] = useState(
    (profile.avatar && profile.avatar.url) || avatarNoImage
  );

  async function handleChangeAvatar(e) {
    const data = new FormData();

    data.append('file', console.log(e.target.files[0]));
    
    console.log(data)
    const response = await api.post('files', data);
    console.log(response.data)
    const { id, url } = response.data;

    setAvatarFile(id);
    setPreviewAvatar(url);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      avatar_id: avatarFile,
      name,
      email,
    };

    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h2>Editar Perfil</h2>
          <label htmlFor="avatar">
            <img src={previewAvatar} alt="" />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
              accept="image/*"
            />
          </label>
          <div>
            <input
              type="text"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="">Nome:</label>
            <span>
              <i></i>
            </span>
          </div>
          <div>
            <input
              type="email"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="">Email:</label>
            <span>
              <i></i>
            </span>
          </div>

          <hr />

          <div>
            <input
              type="password"
              placeholder=" "
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
            />
            <label htmlFor="">Senha antiga:</label>
            <span>
              <i></i>
            </span>
          </div>
          <div>
            <input
              type="password"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label htmlFor="">Nova senha:</label>
            <span>
              <i></i>
            </span>
          </div>
          <div>
            <input
              type="password"
              placeholder=" "
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <label htmlFor="">Confirme sua senha:</label>
            <span>
              <i></i>
            </span>
          </div>

          <button type="submit">Editar Perfil</button>
        </form>
      </Content>
    </Container>
  );
}
