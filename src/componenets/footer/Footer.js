import { Link } from "react-router-dom";

const FooterStandrdLink = ({ path, name }) => {
  return (
    <div className="text-blue-600 hover:underline px-1">
      <Link to={path}> {name} </Link>
    </div>
  );
};

const FooterlowerLink = ({ path, name }) => {
  return (<div className="text-gray-600 hover:underline px-1">
    <Link to={path}>{name}</Link>
  </div>)
}

function Footer() {
  return (
    <div className="px-[200px] bg-gray-200 text-xs font-semibold text-gray-600">
      <div className="flex flex-row py-2">
        More ways to shop. <FooterStandrdLink to="/" name="Find an store" /> or{"  "}
        <FooterStandrdLink to="/" name=" other retailer" />
        {" "}
        hear you.
      </div>
      <div className="flex flex-row justify-between py-2 border-t-2 border-t-gray-400" >
        <div>Copyright Apple Inc. All Right Recieved</div>
        <div className="flex flex-row gap-6">
          <FooterlowerLink to="/" name="Privacy policy" />
          <FooterlowerLink to="/" name="Terms of Use" />
          <FooterlowerLink to="/" name="sales and Refund" />
          <FooterlowerLink to="/" name="Leagle" />
          <FooterlowerLink to="/" name="Site Map" />
        </div>
        <div> 
          <FooterlowerLink to="/" name="United States" />
        </div>
      </div>

    </div>
  );
}

export default Footer;
