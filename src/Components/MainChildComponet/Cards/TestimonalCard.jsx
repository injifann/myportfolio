
import '../../../assets/Style/testimonal.css'

function TestimonalCard(props)
{
  return <div className="card">
     <img src={props.image} alt="" />
    <h4>{props.clientname}</h4>
   
    <p>
     {props.testimonal}

    </p>

  </div>

}
export default TestimonalCard;