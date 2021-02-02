export function addVideoRequest(data) {
  return {
    type: '@video/ADD_VIDEO_REQUEST',
    payload: { data },
  };
}

export function addVideoToUpdate(video) {
  return {
    type: '@video/ADD_VIDEO_TO_UPDATE',
    payload: { video },
  };
}

export function editVideoRequest(data) {
  return {
    type: '@video/EDIT_VIDEO_REQUEST',
    payload: { data },
  };
}

export function videoFailure() {
  return {
    type: '@video/VIDEO_FAILURE',
  };
}
