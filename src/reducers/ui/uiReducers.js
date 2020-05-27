import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/models';

export default handleActions({
  SHOW: (state, { payload }) => (
    state.set('todos', payload.todo)
  ),
}, TodoState); 