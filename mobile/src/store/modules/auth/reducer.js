import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  is_admin: false,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.is_admin = action.payload.user.is_admin;
      });
    default:
      return state;
  }
}
