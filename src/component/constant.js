import { BsNewspaper } from "react-icons/bs";
import { GrHistory } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { TfiCup } from "react-icons/tfi";
import { IoMdMusicalNote } from "react-icons/io";
import { LuPodcast } from "react-icons/lu";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { TfiLayoutSlider } from "react-icons/tfi";

export const sidebarMenu = ["You", "Subscription", "Explore"];

export const menuOptions = {
  You: [
    {
      label: "History",
      img: <GrHistory />,
    },
    {
      label: "Watch later",
      img: <MdOutlineWatchLater />,
    },
    {
      label: "Liked Videos",
      img: <SlLike />,
    },
  ],
  Subscription: [
    {
      label: "Sports",
      img: <TfiCup />,
    },
    {
      label: "News",
      img: <BsNewspaper />,
    },
    {
      label: "Music",
      img: <IoMdMusicalNote />,
    },
  ],
  Explore: [
    {
      label: "Podcast",
      img: <LuPodcast />,
    },
    {
      label: "Learning",
      img: <MdOutlineCastForEducation />,
    },
    {
      label: "Shopping",
      img: <RiShoppingBag3Line />,
    },
    {
      label: "fashion & Beauty",
      img: <GiClothes />,
    },
    {
      label: "Gaming",
      img: <IoGameController />,
    },
  ],
};

export const sidebarLogo = [
  <FaHome  size="1.3rem"/>,
  <SiYoutubeshorts size="1.3rem"/>,
  <MdSubscriptions size="1.3rem" />,
  <TfiLayoutSlider size="1.3rem"/>,
  <GrHistory size="1.3rem" />,
  <MdOutlineWatchLater size="1.6rem" />,
  <SlLike size="1.3rem" />,
  <TfiCup size="1.3rem" />,
  <BsNewspaper size="1.3rem" />,
  <IoMdMusicalNote size="1.3rem" />,
  <LuPodcast size="1.3rem" />,
  <MdOutlineCastForEducation size="1.3rem" />,
  <RiShoppingBag3Line size="1.3rem" />,
  <GiClothes size="1.3rem" />,
  <IoGameController size="1.3rem" />,
];

export const mostSearchedCategory= [
  "Sport", "Music", "Movie", "Podacast", "News", "Cricket", "Football", "Sport", "Music", "Movie", "Podacast", "News", "Cricket", "Football", "Sport", "Music", "Movie", "Podacast", "News", "Cricket", "Football"
]
export const mostPopularVideosApi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyCjJpsnrBxV2GsZ06uB7MUKZmURsom02t0"
