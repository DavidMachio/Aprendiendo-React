
import './App.css'
import Chronometer from './components/Chronometer/Chronometer';
import Countdown from './components/CountDown/CountDown';
import DigitalClock from './components/DigitalClock/DigitalClock'

const App = () => {

  return (
    <div className="fullproject">
      <DigitalClock />
      <Countdown/>
      <Chronometer />
    </div>
  )
}

export default App;
