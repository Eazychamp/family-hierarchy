import ACTION from '../constants';

export const SnackBarOpen = (content, type, duration) => {
    return { type: ACTION.SNACKBAR_OPEN, payload: { content, type, duration } }
}

export const SnackBarClose = (data) => {
    return { type: ACTION.SNACKBAR_CLOSE, payload: data }
}