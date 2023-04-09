import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import Card from "../Card";
import "./style.css";

const LIST_URL = "https://pokeapi.co/api/v2/pokemon?limit=9";

const Content = () => {
  const { data } = useSWR(LIST_URL, fetcher);
  console.log(data);

  return (
    <div className="content">
      <div className="containerCard">
        {(data?.results || []).map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
