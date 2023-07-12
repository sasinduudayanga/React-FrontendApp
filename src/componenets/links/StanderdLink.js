import { NavLink } from "react-router-dom"

const Sublink = ({name}, {path}) => {
  return(<NavLink>{name}</NavLink>)
}

function StanderdLink({path, name}) {
  return (
    <NavLink to={path} className="font-semibold text-xl text-blue-700 hover:text-blue-900 hover:underline transition-all ease-in-out">{name}</NavLink>
  )
}

export default StanderdLink