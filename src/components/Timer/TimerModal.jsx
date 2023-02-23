import { useEffect, useRef, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";

const INTERVAL_TIMEOUT_ONE_SECOND = 1000;

export const TimerModal = () => {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef(null);
  
  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setTime(new Date());
    //   console.log("interval");
    // }, INTERVAL_TIMEOUT_ONE_SECOND);
    return () => {
      console.log("clear interval");
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  const handleStartInterval = () => {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        setTime(new Date());
        console.log("interval");
      }, INTERVAL_TIMEOUT_ONE_SECOND);
    }
  };

  const handleStopInterval = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null
    }
  };

  const formatTime = () => {
    const hours = String(time.getHours()).padStart(2, "0"); // 8 => 08
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
      <h2 className="h1 m-5">{formatTime()}</h2>
      <div className="d-flex flex-row gap-5">
        <button onClick={handleStartInterval} className="btn btn-outline-light">
          <FaPlay />
        </button>
        <button onClick={handleStopInterval} className="btn btn-outline-light">
          <FaStop />
        </button>
      </div>
    </div>
  );
};

// export class TimerModal extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({ time: new Date() });
//       console.log("interval");
//     }, INTERVAL_TIMEOUT_ONE_SECOND);
//   }

//   componentWillUnmount() {
//     console.log("clear interval");
//     clearInterval(this.intervalId);
//   }

//   formatTime() {
//     const { time } = this.state;

//     const hours = String(time.getHours()).padStart(2, "0"); // 8 => 08
//     const minutes = String(time.getMinutes()).padStart(2, "0");
//     const seconds = String(time.getSeconds()).padStart(2, "0");

//     return `${hours}:${minutes}:${seconds}`;
//   }

//   render() {
//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
//         <h2 className="h1 m-5">{this.formatTime()}</h2>
//         <div className="d-flex flex-row gap-5">
//           <button className="btn btn-outline-light">
//             <FaPlay />
//           </button>
//           <button className="btn btn-outline-light">
//             <FaStop />
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
