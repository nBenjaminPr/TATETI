import './Square.css'

const Square = (props) => {
  return ( 
    <button className="square bg-warning m-3" onClick={props.action}>
      {props.symbol}
    </button>
  );
}
 
export default Square;