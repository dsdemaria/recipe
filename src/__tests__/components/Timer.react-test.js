
import { secondsToMinutes } from '../../components/Timer';

it('Converts seconds to minutes', () => {
  expect(secondsToMinutes(1500)).toEqual('25:00')
})
