import uuid from 'uuid/v1'

export const pictureCreate = (picture) => {
  picture.id = uuid()
  return {
    type: 'CREATE_PICTURE',
    payload: picture,
  }
}

export const pictureReset = () => ({type: 'PICTURE_RESET'})
