import { useState } from "react";

import housesData from "./data/houses.json";

import Header from "./components/Header";
import HouseCard from "./components/HouseCard";
import InputText from "./components/InputText";
import SelectType from "./components/SelectType";
import AvailabilityBox from "./components/AvailabilityBox";

function App() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectValue, setSelectValue] = useState("All");
  const [textValue, setTextValue] = useState("");

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="filters">
          <InputText textValue={textValue} setTextValue={setTextValue} />
          <SelectType setSelectValue={setSelectValue} />
          <AvailabilityBox
            checkboxValue={checkboxValue}
            setCheckboxValue={setCheckboxValue}
          />
        </div>
        <div className="cards">
          {housesData
            .filter((house) =>
              checkboxValue ? house.available === checkboxValue : true
            )
            .filter((house) =>
              selectValue === "All" ? true : house.type === selectValue
            )
            .filter((house) =>
              !textValue
                ? true
                : house.name
                    .toLocaleLowerCase()
                    .includes(textValue.toLocaleLowerCase())
            )
            .map((house) => (
              <HouseCard key={`${house.id}-${house.name}`} {...house} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
