import BgCard from "../images/bg-pattern-card.svg";
import ImgVictor from "../images/image-victor.jpg";
function ProfileCard() {
  return (
    <div className="bg-white flex flex-col items-center gap-4 rounded-xl pb-7 shadow-2xl">
      <img className="rounded-t-xl" src={BgCard} alt="" />
      <div className="flex flex-col items-center -mt-16">
        <img className="rounded-full border-4" src={ImgVictor} alt="" />
      </div>
      <div className="flex flex-col items-center w-full gap-8">
        {/* Profil informations */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-row gap-3 items-center">
            <h1 className="text-xl font-bold text-gray-700">Victor Crest</h1>
            <p className="text-xl text-gray-500">26</p>
          </div>
          <p className="text-gray-500">London</p>
        </div>
        {/* Profil informations */}
        <div className="w-full border border-gray-500/20"></div>
        {/* Socials stats */}
        <div className="flex flex-row justify-around items-center w-full px-5">
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-gray-700">80K</p>
            <p className="font-light tracking-widest text-sm">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-gray-700">803K</p>
            <p className="font-light tracking-widest text-sm">Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-gray-700">1.4K</p>
            <p className="font-light tracking-widest text-sm">Photos</p>
          </div>
        </div>
        {/* Socials stats */}
      </div>
    </div>
  );
}

export default ProfileCard;
