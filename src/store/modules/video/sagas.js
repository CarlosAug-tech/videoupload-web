import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { videoFailure } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

export function* addVideo({ payload }) {
  try {
    const { title, description, file_id, thumb_id } = payload.data;

    yield call(api.post, 'videos', {
      title,
      description,
      file_id,
      thumb_id,
    });

    history.push('/myVideos');

    toast.success('Upload concluido com sucesso!');
  } catch (err) {
    yield put(videoFailure());
    toast.error('Falha ao enviar video, verifique as informações do video');
  }
}

export function* editVideo({ payload }) {
  try {
    const { id, title, description, file_id, thumb_id } = payload.data;

    yield call(api.put, `/videos/${id}`, {
      title,
      description,
      file_id,
      thumb_id,
    });

    history.push('/myVideos');

    toast.success('Video editado com sucesso!');
  } catch (err) {
    yield put(videoFailure());
    toast.error('Falha ao editar o video, verifique as informações do video');
  }
}

export default all([
  takeLatest('@video/ADD_VIDEO_REQUEST', addVideo),
  takeLatest('@video/EDIT_VIDEO_REQUEST', editVideo),
]);
