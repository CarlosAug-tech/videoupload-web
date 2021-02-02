import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import Notifications from '../Notifications';
import Sidebar from '../Sidebar';

import { signOut } from '../../store/modules/auth/actions';

import avatarNoImage from '../../assets/Image/avatarNoImage.png'
import logo from '../../assets/Image/logo.png'

import {
  MdVideoLibrary,
  MdAddCircleOutline,
  MdPowerSettingsNew,
} from 'react-icons/md';
import { FaYoutube, FaSun, FaMoon, FaUserEdit } from 'react-icons/fa';

import {
  Container,
  Content,
  Profile,
  Menu,
  DropdownUser,
  ButtonSidebar,
} from './styles';

export default function Header({ changeTheme }) {
  const dispatch = useDispatch();

  const [visibleDrop, setVisibleDrop] = useState(false);
  const [visibleNotify, setVisibleNotify] = useState(false);
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const { colors, title } = useContext(ThemeContext);
  const isLogged = useSelector((state) => state.auth.signed);
  const profile = useSelector((state) => state.user.profile);

  function handleAsVisibleDrop() {
    setVisibleDrop(!visibleDrop);

    setVisibleNotify(false);
  }

  function handleVisibleSidebar() {
    setVisibleSidebar(!visibleSidebar);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Container>
        <Content>
          <nav>
            <img src={logo} alt=""/>
            <Link to="/">Upload</Link>
          </nav>
          <div>
            {/* {isLogged && } */}
            <div>
              <FaSun size={20} />
              <Switch
                onChange={changeTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={12}
                width={40}
                handleDiameter={16}
                offColor={colors.secundary}
                onColor={colors.third}
              />
              <FaMoon size={20} />
            </div>
            {isLogged ? (
              <Profile>
                <Notifications
                  setVisibleNotify={setVisibleNotify}
                  visibleNotify={visibleNotify}
                  setVisibleDrop={setVisibleDrop}
                />
                <aside onClick={handleAsVisibleDrop}>
                  <img
                    src={
                      (profile.avatar && profile.avatar.url) ||
                      avatarNoImage
                    }
                    alt=""
                  />
                  <DropdownUser visibleDrop={visibleDrop}>
                    <div>
                      <img
                        src={
                          (profile.avatar && profile.avatar.url) ||
                          avatarNoImage
                        }
                        alt=""
                      />
                      <span>{profile.name}</span>
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
                  </DropdownUser>
                </aside>
              </Profile>
            ) : (
              <Menu>
                <li>
                  <Link to="/register">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/signIn">Login</Link>
                </li>
              </Menu>
            )}
            <ButtonSidebar
              onClick={handleVisibleSidebar}
              visibleSidebar={visibleSidebar}
            >
              <span>
                <span></span>
              </span>
            </ButtonSidebar>
          </div>
        </Content>
      </Container>
      <Sidebar
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
        isLogged={isLogged}
        handleSignOut={handleSignOut}
      />
    </>
  );
}
