import { useState, useEffect } from "react";

const Usesearch = (data) => {
  const [filterList, setFilterList] = useState(data.allProducts);

  useEffect(() => {
    if (data.search) {
      const filter = data.allProducts.res.filter((item) => {
        return item.name.includes(data.search);
      });
      setFilterList(filter);
    }
    return () => {
      setFilterList(data.allProducts);
    };
  }, [data.search, data.allProducts]);

  return filterList;
};

export default Usesearch;
