import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import avatarNoImage from '../../assets/Image/avatarNoImage.png'

import { FaUserEdit } from 'react-icons/fa';
import {
  MdVideoLibrary,
  MdAddCircleOutline,
  MdPowerSettingsNew,
} from 'react-icons/md';
import { Container, Content, SidebarMenu } from './styles';

export default function Sidebar({
  visibleSidebar,
  setVisibleSidebar,
  isLogged,
  handleSignOut,
}) {
  const profile = useSelector((state) => state.user.profile);

  function handleCloseSidebar(e) {
    if (e.target.id === 'Sidebar') {
      setVisibleSidebar(false);
    }
  }

  return (
    <Container
      id="Sidebar"
      visibleSidebar={visibleSidebar}
      onClick={handleCloseSidebar}
    >
      <Content>
        {isLogged ? (
          <SidebarMenu>
            <div>
              <img
                src={
                  (profile.avatar && profile.avatar.url) ||
                  avatarNoImage
                }
                alt=""
              />
              <strong>{profile.name}</strong>
            </div>
            <div>
              <Link to="/profile">
                Editar Perfil
                <FaUserEdit size={18} />
              </Link>
            </div>
            <div>
              <Link to="/myVideos">
                Meus Videos
                <MdVideoLibrary size={18} />
              </Link>
            </div>
            <div>
              <Link to="/addVideo">
                Adicionar Video
                <MdAddCircleOutline size={18} />
              </Link>
            </div>
            <div>
              <Link to="#" onClick={handleSignOut}>
                Deslogar
                <MdPowerSettingsNew size={18} />
              </Link>
            </div>
          </SidebarMenu>
        ) : (
          <SidebarMenu>
            <div>
              <Link to="/register">
                Cadastrar-se
                <FaUserEdit size={18} />
              </Link>
            </div>
            <div>
              <Link to="/signIn">
                Fazer Login
                <MdVideoLibrary size={18} />
              </Link>
            </div>
          </SidebarMenu>
        )}
      </Content>
    </Container>
  );
}
