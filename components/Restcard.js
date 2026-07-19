import { CDN_URL } from "../utils/constants";

const stylecard = {
  backgroundColor: "#f0f0f0",
};
const Restcard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card" style={stylecard}>
      <img
        className="hsrlogo"
        alt=" res-log"
        src={CDN_URL + resData.card.card.info.cloudinaryImageId}
      ></img>
      <h3 className="hotel">{resData.card.card.info.name}</h3>
      <h4 className="dish">{resData.card.card.info.cuisines.join(", ")}</h4>
      <h4 className="rating">{resData.card.card.info.avgRating}</h4>
    </div>
  );
};
 export const withPromotedCard = () => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <Restcard {...props} />
      </div>
    );
  };
};
export default Restcard;
