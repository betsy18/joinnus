import INIT_STATE from '../states/seats';

const Reducer = (state = INIT_STATE, action) => {
  let verifySeat = [];
  let Zone = {};
  switch (action.type) {
    case 'CHOOSE':
      state['seats'].map((seat) => {
        if (seat['id'] === action['id']) {
          if (seat['seat_occupied']) {
            verifySeat.push({ ...seat,
              seat_occupied: false,
              color: 'darkseagreen'
            });
          } else {
            verifySeat.push({ ...seat,
              seat_occupied: true,
              color: 'red'
            });
          }
        } else {
          verifySeat.push({ ...seat
          });
        }
      });
      return { ...state,
        seats: verifySeat
      };
    case 'SEE_SEATS':
      if (state['allzone'].click){
        falseZone.click = false;
        falseZone.display = 'hide';
        falseZone.svg = 'show';
      }
      return { ...state,
        allzone: falseZone
      };
    default:
      return state;
  }
};

export default Reducer;