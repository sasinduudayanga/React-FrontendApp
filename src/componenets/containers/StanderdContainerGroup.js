import StanderdContainer from "./StanderdContainer"

function StanderdContainerGroup({data}) {
    return (
        <div className="grid grid-cols-2">
            {data.map((item) => (
                <StanderdContainer
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    style={item.style}
                />
            ))}
        </div>
    )
}

export default StanderdContainerGroup