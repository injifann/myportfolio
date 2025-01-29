
function ServiceCard(props)
{
return <div className="service-card">
  <h3>{props.title}</h3>
  <hr/>
<p>
{
  props.desc
}</p>
</div>

}
export default ServiceCard;