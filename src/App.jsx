import "./App.css";

import imgLogo from "./assets/images/logo_pokedex.png";
import imgSearch from "./assets/images/search.png";
import imgTag from "./assets/images/tag.png";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="headerMain">
          <img
            width={24}
            height={24}
            className="headerLogo"
            src={imgLogo}
            alt="logo"
          />
          <div className="headerTitle">Pokédex</div>
        </div>
        <div className="headerSearch">
          <div className="searchBar">
            <img
              className="searchImage"
              width={16}
              height={16}
              src={imgSearch}
              alt="search"
            />
            <input className="searchInput" placeholder="Search" />
          </div>
          <div className="searchTag">
            <img src={imgTag} alt="tag" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
