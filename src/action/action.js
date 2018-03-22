export const actionTypes = {
  SELECT_SECTION: 'SELECT_SECTION',
  SELECT_SEAT: 'SELECT_SEAT',
  BUY_TICKET: 'BUY_TICKET'

}

export const selectSection = (piso, section) => ({
  type: actionTypes.SELECT_SECTION,
  piso,
  section,
})

// se puede pasar por coordenadas de la butaca o por el id
export const selectSeat = (x, y) = ({
  type: actionTypes.SELECT_SEAT,
  x,
  y,
})

export const buy = () => ({
  type: BUY_TICKET,
})
