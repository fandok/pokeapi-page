import useSWR from "swr";
import fetcher from "../../helpers/fetcher";

import "./style.css";

const Card = ({ item }) => {
  const { data } = useSWR(item.url, fetcher);

  const { id, sprites } = data || {};
  console.log(data);

  return (
    <div className="card">
      <div className="cardHeader">#{id}</div>
      <img
        className="cardImage"
        width={72}
        height={72}
        src={sprites?.other["official-artwork"].front_default}
        alt={item.name}
      />
      <div className="cardTitle">{item.name}</div>
    </div>
  );
};

export default Card;
