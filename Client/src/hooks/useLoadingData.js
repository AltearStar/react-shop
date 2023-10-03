import { useState } from "react";

function useLoadingdata() {
   let [isLoading, setIsLoading] = useState(true);

   const loadingFunction = async (inpFunction) => {
      setIsLoading(true);
      const responce = await inpFunction();
      setIsLoading(false);
      return responce;
   };

   return [isLoading, loadingFunction];
}

export default useLoadingdata;
