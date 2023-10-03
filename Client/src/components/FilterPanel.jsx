import React, { useEffect, useState } from "react";
import ButtonBase from "./UI/ButtonBase";
import BaseSelect from "./UI/BaseSelect";
import BaseInput from "./UI/BaseInput";

const FilterPanel = ({ updateSortParamether }) => {
   let [selectFieldValue, setSelectFieldValue] = useState("");
   let [searchFieldValue, setSearchFieldValue] = useState("");

   const fieldList = [
      { name: "Цена", value: "cost" },
      { name: "Имя", value: "name" },
      { name: "Рейтинг", value: "rating" },
   ];

   useEffect(() => {
      sortFunction();
   }, [searchFieldValue]);

   const sortFunction = () => {
      updateSortParamether({
         field: selectFieldValue,
         search: searchFieldValue,
      });
   };

   return (
      <div className="filter-panel">
         <BaseInput
            type="text"
            placeholder="Поиск"
            value={searchFieldValue}
            onChange={(event)=>{setSearchFieldValue(event.target.value)}}
         />
         <BaseSelect
            list={fieldList}
            name="Сортировка по полю..."
            callback={setSelectFieldValue}
         />
         <ButtonBase onClick={sortFunction}>Сортировать</ButtonBase>
      </div>
   );
};

export default FilterPanel;
