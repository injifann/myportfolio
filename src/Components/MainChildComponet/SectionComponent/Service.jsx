import ServiceCard from "../Cards/ServiceCard";

import '../../../assets/Style/servicecard.css';
function Service()
{
  return <section className="service">
  <h1 className="section-title">Service</h1>
  
  <ServiceCard title="Responsive Web Design" desc="Creating websites that look great on all devices, from desktops to smartphones">

  </ServiceCard>

  <ServiceCard title="Performance Optimization" desc="Ensuring websites load quickly and run smoothly">

  </ServiceCard>

  <ServiceCard title="SEO Optimization" desc="Implementing best practices to improve search engine rankings">

  </ServiceCard>

  <ServiceCard title="Accessibility"  desc="Ensuring websites are accessible to all users, including those with disabilities">

  </ServiceCard>
  </section>

}
export default Service;