import { NavLink } from "react-router-dom"

const SublinkWrapper = ({ children, title }) => {
    return (
        <div>
            <div className='font-bold text-sm pb-3 text-gray-700'>{title}</div>
            <div className='flex flex-col gap-1'>{children}</div>
        </div>
    )
}

const Sublink = ({ path, name }) => {
    return (<NavLink to={path}><div className='text-xs hover:underline'>{name}</div></NavLink>)
}

function LinkGroup() {
    return (
        <div className='grid grid-cols-5 border-t-2 border-t-gray-400 py-5'>
            <SublinkWrapper title="Shop and Learn">
                <Sublink to="/" name="Store" />
                <Sublink to="/" name="iphone" />
                <Sublink to="/" name="ipad" />
                <Sublink to="/" name="iwatch" />
                <Sublink to="/" name="airbuds" />
            </SublinkWrapper>
            <SublinkWrapper title="Services">
                <Sublink to="/" name="Apple Music" />
                <Sublink to="/" name="Apple tv+" />
            </SublinkWrapper>
            <SublinkWrapper title="Branches">
                <Sublink to="/" name="Nugegoda" />
                <Sublink to="/" name="Maharagama" />
                <Sublink to="/" name="Galle" />
                <Sublink to="/" name="Matara" />
            </SublinkWrapper>
            <SublinkWrapper title="Contact">
                <Sublink to="/" name="071-9352858" />
                <Sublink to="/" name="075-0433167" />
            </SublinkWrapper>
            <SublinkWrapper title="Email">
                <Sublink to="/" name="isasi@gmail.com" />
                <Sublink to="/" name="iapsi@gmail.com" />
            </SublinkWrapper>
        </div>
    )
}

export default LinkGroup