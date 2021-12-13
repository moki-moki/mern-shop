import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
const Rating = ({ value }) => {
  return (
    <>
      <div>
        {value >= 1 ? (
          <ImStarFull style={{ color: "#FBB13C" }} />
        ) : value >= 0.5 ? (
          <ImStarHalf style={{ color: "#FBB13C" }} />
        ) : (
          <ImStarEmpty style={{ color: "#FBB13C" }} />
        )}
      </div>
      <div>
        {value >= 2 ? (
          <ImStarFull style={{ color: "#FBB13C" }} />
        ) : value >= 1.5 ? (
          <ImStarHalf style={{ color: "#FBB13C" }} />
        ) : (
          <ImStarEmpty style={{ color: "#FBB13C" }} />
        )}
      </div>
      <div>
        {value >= 3 ? (
          <ImStarFull style={{ color: "#FBB13C" }} />
        ) : value >= 2.5 ? (
          <ImStarHalf style={{ color: "#FBB13C" }} />
        ) : (
          <ImStarEmpty style={{ color: "#FBB13C" }} />
        )}
      </div>
      <div>
        {value >= 4 ? (
          <ImStarFull style={{ color: "#FBB13C" }} />
        ) : value >= 3.5 ? (
          <ImStarHalf style={{ color: "#FBB13C" }} />
        ) : (
          <ImStarEmpty style={{ color: "#FBB13C" }} />
        )}
      </div>

      <div>
        {value >= 5 ? (
          <ImStarFull style={{ color: "#FBB13C" }} />
        ) : value >= 4.5 ? (
          <ImStarHalf style={{ color: "#FBB13C" }} />
        ) : (
          <ImStarEmpty style={{ color: "#FBB13C" }} />
        )}
      </div>
    </>
  );
};

export default Rating;
