
import StanderdLink from "../links/StanderdLink"

function StanderdContainer({title, description, image, style}) {
  return (
    <div className={`flex flex-col items-center justify-center py-3 bg-blue-50 ${style}`}>
        <p className="text-[50px] font-semibold">{title}</p>
        <p className="font-thin text-lg">{description}</p>
        <div className="flex flex-row gap-3 py-3">
            <StanderdLink path="/iphone/iphone-14" name="Lern More >" />
            <StanderdLink path="/iphone/buynow" name="Buy Now >" />
        </div>
        <img src={image} alt="Main banner" className="w-[300px]" />
    </div>
  )
}

export default StanderdContainer