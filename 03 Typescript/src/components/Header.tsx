
import Button from './UI/Button.tsx';
import { useTimersContext } from '../Store/timers-context.tsx';

export default function Header() {
  const { isRunning, stopTimers, startTimers } = useTimersContext()

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={isRunning ? stopTimers : startTimers}>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
