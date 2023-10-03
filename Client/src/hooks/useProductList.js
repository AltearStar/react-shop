import { useEffect, useState } from "react";

function useProductList(productList) {
   let [productListDisplay, setProductListDisplay] = useState({});
   let [sortParamether, setSortParamether] = useState({
      field: "",
      desc: 1,
      search: "",
   });

   useEffect(() => {
      if (productList.length > 1) filterSortListDisplay();
   }, [productList, sortParamether]);

   const updateSortParamether = (value) => {
      setSortParamether({
         field: value.field,
         search: value.search,
         desc:
            sortParamether.field === value.field
               ? sortParamether.search === value.search
                  ? sortParamether.desc === 1
                     ? -1
                     : 1
                  : sortParamether.desc
               : 1,
      });
   };

   const filterSortListDisplay = () => {
      const filtredList = productList.filter((item) => {
         return (
            item.name
               .toLowerCase()
               .indexOf(sortParamether.search.toLowerCase()) >= 0
         );
      });

      filtredList.sort((product1, product2) => {
         if (typeof product1[sortParamether.field] === "string") {
            return (
               product1[sortParamether.field].localeCompare(
                  product2[sortParamether.field]
               ) * sortParamether.desc
            );
         } else {
            return (
               (product1[sortParamether.field] -
                  product2[sortParamether.field]) *
               sortParamether.desc
            );
         }
      });

      setProductListDisplay([...filtredList]);
   };

   return [productListDisplay, updateSortParamether];
}
export default useProductList;
