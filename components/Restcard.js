// import { CDN_URL } from "../utils/constants";

// const stylecard = {
//   backgroundColor: "#f0f0f0",
// };
// const Restcard = (props) => {
//   const { resData } = props;

//   return (
//     <div className="w-80 justify-items-center-safe border rounded shadow-lg m-1" style={stylecard}>
//       <img
//         className="w-70 h-90 p-4 "
//         alt=" res-log"
//         src={CDN_URL + resData.card.card.info.cloudinaryImageId}
//       ></img>
//       <h3 className="hotel">{resData.card.card.info.name}</h3>
//       <h4 className="text-gray-500 text-sm line-clamp-3 w-30 ">
//         {resData.card.card.info.cuisines.join(", ")}
//       </h4>
//       <h4 className="rating">{resData.card.card.info.avgRating}</h4>
//     </div>
//   );
// };
// export const withPromotedCard = () => {
//   return () => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <Restcard {...props} />
//       </div>
//     );
//   };
// };
// export default Restcard;
import { CDN_URL } from "../utils/constants";

const Restcard = ({ resData }) => {
  const info = resData?.card?.card?.info;

  if (!info) return null;

  return (
    <article className="h-full overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        className="aspect-[4/3] w-full object-cover"
        src={CDN_URL + info.cloudinaryImageId}
        alt={info.name || "Restaurant"}
      />

      <div className="p-3 sm:p-4">
        <h3 className="truncate text-base font-bold sm:text-lg">
          {info.name}
        </h3>

        <p className="mt-1 line-clamp-2 min-h-10 text-xs text-gray-600 sm:text-sm">
          {info.cuisines?.join(", ")}
        </p>

        <p className="mt-2 text-sm font-semibold sm:text-base">
          ⭐ {info.avgRating || "N/A"}
        </p>
      </div>
    </article>
  );
};

export const withPromotedCard = (RestaurantCard) => {
  const PromotedCard = (props) => (
    <div className="relative">
      <span className="absolute left-2 top-2 z-10 rounded bg-black px-2 py-1 text-xs text-white">
        Promoted
      </span>
      <RestaurantCard {...props} />
    </div>
  );

  return PromotedCard;
};

export default Restcard;
