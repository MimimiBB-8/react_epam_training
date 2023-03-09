import { ReservingIdActionTypes } from '../reducers/types'
import { receivingId } from './reservingId';

describe('Reserving Id action', () => {
  it('should create an action to set the selected id', () => {
    const expected = {
      type: ReservingIdActionTypes.RESERVING_ID,
      payload: 313369
    };
    expect(receivingId(313369)).toEqual(expected);
  });
});
