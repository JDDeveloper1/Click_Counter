//Impoert CSS
import '../stylesheet/counter.css'


function Counters({ numClicks }) {
  return (
    <div className="counter-clicks">
      {numClicks}
    </div>
  );
}


export default  Counters;