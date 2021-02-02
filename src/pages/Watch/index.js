import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import avatarNoImage from '../../assets/Image/avatarNoImage.png';

import { FaCircle, FaEllipsisV, FaEdit } from 'react-icons/fa';
import {
  Container,
  Content,
  Video,
  VideoInformation,
  VideoDescription,
  CommentList,
  Comment,
  EditComments,
} from './styles';

export default function Watch({ match }) {
  const profile = useSelector((state) => state.user.profile);
  const isLogged = useSelector((state) => state.auth.signed);

  const [video, setVideo] = useState([]);
  const [content, setContent] = useState('');
  const [comment, setComment] = useState('');
  const { id } = match.params;

  const getVideo = useCallback(async () => {
    const response = await api.get(`/videos/${id}`);
    const data = response.data.map((video) => ({
      ...video,
      formarttedDate: formatDistance(parseISO(video.createdAt), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
      amountComments: video.comments.length,
    }));
    setVideo(data);
  }, [id]);

  useEffect(() => {
    // async function loadVideo() {
    //   const response = await api.get(`/videos/${id}`);
    //   const data = response.data.map((video) => ({
    //     ...video,
    //     formarttedDate: formatDistance(parseISO(video.createdAt), new Date(), {
    //       addSuffix: true,
    //       locale: pt,
    //     }),
    //     amountComments: video.comments.length,
    //   }));
    //   setVideo(data);
    // }
    // loadVideo();
    getVideo();
  }, [getVideo, comment]);

  console.log(video);

  async function handleComment(e) {
    e.preventDefault();

    const response = await api.post(`/comments/${id}`, {
      content,
    });

    setContent('');
    setComment(response.data);
  }

  // console.log(content);

  return (
    <Container>
      <Content>
        {video.map((video) => (
          <Video key={video.id}>
            <video
              src={video.file_video && video.file_video.url}
              controls
            ></video>
            <VideoInformation>
              <div>
                <p>{video.title}</p>
                <time>{`Postagem: ${video.formarttedDate}`}</time>
              </div>
            </VideoInformation>
            <VideoDescription>
              <div>
                <img
                  src={
                    (video.user.avatar && video.user.avatar.url) ||
                    avatarNoImage
                  }
                  alt=""
                />
                <strong>{video.user.name}</strong>
              </div>
              <div>
                <p>{video.description}</p>
              </div>
            </VideoDescription>
            <CommentList>
              <span>{`${video.amountComments} Comentarios`}</span>
              {isLogged && (
                <form onSubmit={handleComment}>
                  <div>
                    <img
                      src={
                        (profile.avatar && profile.avatar.url) ||
                        avatarNoImage
                      }
                      alt=""
                    />
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Publicar um comentario publico:"
                      onChange={(e) => setContent(e.target.value)}
                      value={content}
                    ></textarea>
                  </div>
                  <button type="submit">Comentar</button>
                </form>
              )}
              {video.comments &&
                video.comments.map((comment) => (
                  <Comment key={comment.id}>
                    <div>
                      <img
                        src={
                          (comment.usercomment.avatar &&
                            comment.usercomment.avatar.url) ||
                            avatarNoImage
                        }
                        alt=""
                      />
                      <div>
                        <strong>
                          {comment.usercomment.name}
                          <FaCircle size={5} />
                          <time>
                            {formatDistance(
                              parseISO(comment.createdAt),
                              new Date(),
                              { addSuffix: true, locale: pt }
                            )}
                          </time>
                        </strong>
                        <p>{comment.content}</p>
                      </div>
                      {comment.usercomment.id === profile.id && (
                        <EditComments>
                          <FaEllipsisV size={14} />
                          <div>
                            <Link to="#">Editar Comentario</Link>
                          </div>
                        </EditComments>
                      )}
                    </div>
                  </Comment>
                ))}
            </CommentList>
          </Video>
        ))}
      </Content>
    </Container>
  );
}
