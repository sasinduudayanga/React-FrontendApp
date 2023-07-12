import StanderedLayout from "../componenets/layout/StanderedLayout";
import MainBanner from "../componenets/banners/MainBanner";
import StanderdContainerGroup from "../componenets/containers/StanderdContainerGroup";
import StanderdCarousel from "../componenets/carousel/StanderdCarousel";
import LinkGroup from "../componenets/links/LinkGroup";

//images
import img1 from "../images/iphone.png";
import img2 from "../images/ipad.png";
import img3 from "../images/iwatch.png";
import img4 from "../images/airpods.png";

//Movie images
import mov1 from "../images/movies/movie_img1.jpg";
import mov2 from "../images/movies/movie_img2.jpg";
import mov3 from "../images/movies/movie_img3.jpg";

const DATA = [
  {
    title: "iphone SE",
    description: "Amazing exeperience",
    image: img1,
  },
  {
    title: "iPad",
    description: "Lovable, Drawable, Magical",
    image: img2,
  },
  {
    title: "iWatch",
    description: "A healthy leep ahead",
    image: img3,
  },
  {
    title: "Airpod",
    description: "Rebuilt from the sound up",
    image: img4,
  },
];

const CAROUSEL_DATA = [
  {
    image: mov1,
    imageAlt: "Deadpool"
  },
  {
    image: mov2,
    imageAlt: "Avengers"
  },
  {
    image: mov3,
    imageAlt: "Cartoon"
  }
]

function Home() {
  return (
    <StanderedLayout>
      {/*1) Main banner */}
      <MainBanner />
      {/*2) Box components */}
      <StanderdContainerGroup data={DATA} />

      {/*3) carousel */}
      <StanderdCarousel data={CAROUSEL_DATA} />
      {/*4) page content */}
      {/* 4.1) main content */}
      <div className="px-[200px] bg-gray-200">
        <p className="py-[30px] text-sm text-gray-700">

          Tempor ex nostrud commodo ex nulla cillum officia pariatur adipisicing id.
          Lorem duis consectetur ex dolore magna velit. Velit excepteur id labore
          occaecat mollit adipisicing Lorem minim cupidatat. Esse consectetur culpa
          occaecat proident id nostrud. Dolor tempor ea est laboris. Est excepteur
          tempor aliquip eiusmod. Dolore duis enim elit eu. Minim tempor deserunt
          non cupidatat labore anim cillum do. Ea nisi proident nulla irure deserunt
          minim amet officia veniam qui ipsum nisi nisi. Quis aliqua sint
          reprehenderit id ullamco elit. Quis aliqua reprehenderit non ullamco non
          mollit deserunt do Lorem. Cillum nostrud laboris excepteur consectetur in
          est non voluptate. Nostrud minim mollit ut excepteur labore cillum laboris
          culpa veniam nostrud esse. Mollit elit do dolore enim nisi sunt. Labore id
          labore ea labore anim officia ipsum excepteur commodo. Ex aute ipsum dolor
          commodo est laborum elit do do anim proident reprehenderit non laboris.
          Officia ipsum eiusmod consectetur nulla cillum eiusmod consequat. Magna
          culpa aliqua dolor minim fugiat dolore consequat reprehenderit eu ad. Est
          veniam dolore duis officia pariatur mollit voluptate consectetur ad.
          Excepteur pariatur nisi cillum duis. Tempor magna ea non voluptate mollit.
          Reprehenderit mollit enim cillum adipisicing dolore. Est et exercitation
          exercitation sit incididunt qui dolore voluptate sit in sit eu fugiat.
          Enim amet irure sint reprehenderit aute eu eiusmod ea dolore dolor laboris
          in enim ad. Quis nulla ad sunt occaecat id irure consectetur nisi. Sunt
          deserunt eu consectetur sunt non enim esse sunt nisi in duis.
          Reprehenderit fugiat fugiat velit excepteur reprehenderit dolore deserunt
          id enim mollit anim dolore quis. Et ullamco ut sunt elit cupidatat eu anim
          et amet amet tempor laborum. Irure Lorem est irure dolore nisi amet magna.
          Nostrud laborum labore qui elit pariatur officia ipsum proident sint do.
          Est amet magna sunt elit commodo ipsum. Qui do cupidatat reprehenderit
          aliqua occaecat sit do ea laborum amet dolore. Proident anim sint qui amet
          tempor voluptate veniam est sit nisi aliquip consectetur aliquip.
          Voluptate et eiusmod magna occaecat in deserunt culpa nulla sit officia
          Lorem nulla.
        </p>
        {/* 4.2) link groups */}
        <LinkGroup />
      </div>

    </StanderedLayout>
  );
}

export default Home;
