import { _secondsToMinutes } from '../../components/body/Timer';

it('Converts seconds to minutes', () => {
  expect(_secondsToMinutes(1500)).toEqual('25:00')
})
