import React from "react";
import ReactSelect from "react-select";
import { fuels } from "../../utils/constant";
import { useSearchParams } from "react-router-dom";
const SelectFilter = () => {
  const [params, setParams] = useSearchParams();
  const fuel = params.get("fuel_type");
  const selected = !fuel ? fuels[0] : fuels.find((i) => i.value === fuel);
  return (
    <div>
      <ReactSelect
        onChange={(e) => {
          params.set("fuel_type", e!.value);
          setParams(params);
        }}
        defaultValue={selected}
        className="text-black min-w-[130px]"
        options={fuels}
      />
    </div>
  );
};

export default SelectFilter;
