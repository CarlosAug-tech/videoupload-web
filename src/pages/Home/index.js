import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import { FaCircle } from 'react-icons/fa';
import {
  Container,
  Content,
  VideoList,
  Video,
  VideoDescription,
} from './styles';

import noThumbnail from '../../assets/Image/no-thumbnail.jpg';
import avatarNoImage from '../../assets/Image/avatarNoImage.png';

export default function Home() {
  const [videos, setVideos] = useState([]);

  const refVideo = useRef(null);

  useEffect(() => {
    async function loadVideos() {
      const response = await api.get('/videos');
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

  // console.log(videos);

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

  return (
    <Container>
      <Content>
        <VideoList>
          {videos &&
            videos.map((video) => (
              <Video key={video.id}>
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
                        (video.thumbnail && video.thumbnail.url) || noThumbnail
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
            ))}
        </VideoList>
      </Content>
    </Container>
  );
}
