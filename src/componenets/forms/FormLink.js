import { Link } from "react-router-dom";

function FormLink({path, name}) {
  return (
    <Link to={path} className="text-blue-600 font-semibold text-sm hover:underline">{name}</Link>
  )
}

export default FormLink;