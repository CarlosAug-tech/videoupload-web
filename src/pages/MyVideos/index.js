import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import avatarNoImage from '../../assets/Image/avatarNoImage.png';

import { FaCircle, FaEllipsisV, FaEdit, FaPlusCircle } from 'react-icons/fa';
import {
  Container,
  Content,
  VideoList,
  Video,
  VideoDescription,
  MessageNotVideo,
} from './styles';

import noThumbnailImage from '../../assets/Image/no-thumbnail.jpg';
import { addVideoToUpdate } from '../../store/modules/video/actions';

export default function MyVideo() {
  const [videos, setVideos] = useState([]);

  const refVideo = useRef(null);

  useEffect(() => {
    async function loadVideos() {
      const response = await api.get('/myVideos');
      const data = response.data.map((video) => ({
        ...video,
        amountComments: video.comments.length,
        dateVideo: formatDistance(parseISO(video.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
        isVisible: false,
      }));

      setVideos(data);
    }
    loadVideos();
  }, []);

  function handleMouseOver(id) {
    setVideos(
      videos.map((video) =>
        video.id === id ? { ...video, isVisible: true } : video
      )
    );

    refVideo.current.value = id;
  }

  function handleMouseLeave(id) {
    setVideos(
      videos.map((video) =>
        video.id === id ? { ...video, isVisible: false } : video
      )
    );
    refVideo.current.value = id;
  }

  const dispatch = useDispatch();

  function handleVideoUpdate(video) {
    dispatch(addVideoToUpdate(video));
  }

  return (
    <Container>
      <Content>
        <VideoList>
          {videos.length > 0 ? (
            videos.map((video) => (
              <Video key={video.id}>
                <button type="button">
                  <FaEllipsisV size={13} />
                  <div>
                    <Link
                      to={`/editVideo/${video.id}`}
                      onClick={() => handleVideoUpdate(video)}
                    >
                      Editar Video
                      <FaEdit size={12} />
                    </Link>
                  </div>
                </button>
                <Link
                  to={`/watch/${video.id}`}
                  onMouseEnter={() => handleMouseOver(video.id)}
                  onMouseLeave={() => handleMouseLeave(video.id)}
                  ref={refVideo}
                >
                  {video.isVisible ? (
                    <video
                      src={video.file_video && video.file_video.url}
                      autoPlay="autoplay"
                      muted
                    ></video>
                  ) : (
                    <img
                      src={
                        (video.thumbnail && video.thumbnail.url) ||
                        noThumbnailImage
                      }
                      alt=""
                    />
                  )}
                  <VideoDescription>
                    <img
                      src={
                        (video.user &&
                          video.user.avatar &&
                          video.user.avatar.url) ||
                          avatarNoImage
                      }
                      alt=""
                    />
                    <div>
                      <p>{video.title}</p>
                      <strong>{video.user.name}</strong>
                      <div>
                        <span>{`${video.amountComments} Comentários`}</span>
                        <FaCircle size={5} />
                        <time>{video.dateVideo}</time>
                      </div>
                    </div>
                  </VideoDescription>
                </Link>
              </Video>
            ))
          ) : (
            <MessageNotVideo>
              <strong>Você não possui video!</strong>
              <Link to="/addVideo">
                Adicionar seu primeiro video!
                <FaPlusCircle suze={18} />
              </Link>
            </MessageNotVideo>
          )}
        </VideoList>
      </Content>
    </Container>
  );
}
