import appleBanner from "../../images/apple-banner.png"
import StanderdLink from "../links/StanderdLink"

function MainBanner() {
  return (
    <div className="flex flex-col items-center justify-center py-3">
        <p className="text-[50px] font-semibold">i phone 14</p>
        <p className="font-thin text-lg">With awesome quality and performance</p>
        <div className="flex flex-row gap-3 py-3">
            <StanderdLink path="/iphone/iphone-14" name="Lern More >" />
            <StanderdLink path="/iphone/buynow" name="Buy Now >" />
        </div>
        <img src={appleBanner} alt="Main banner" className="w-[1000px]" />
    </div>
  )
}

export default MainBanner