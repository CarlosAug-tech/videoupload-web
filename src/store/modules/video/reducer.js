import { produce } from 'immer';

const INITIAL_STATE = {
  videoFile: null,
};

export default function video(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@video/ADD_VIDEO_TO_UPDATE': {
        draft.videoFile = action.payload.video;
        break;
      }
      default: {
        return state;
      }
    }
  });
}
