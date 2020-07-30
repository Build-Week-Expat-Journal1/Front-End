import { axiosWithAuth } from '../utils/axiosWithAuth';

export const DELETE_STORY = 'DELETE_STORY';
export const DELETE_FAILURE = 'DELETE_FAILURE';
export const UPDATE_STORY = 'UPDATE_STORY';

export const deleteStory = props => dispatch => {
    axiosWithAuth()
    .delete('/stories/delete/:id')
    .then(res => props.history.push('/Discover'))
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err}))
}