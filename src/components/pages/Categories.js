import { Pagination } from "grommet";
import { categories } from "../../data/categories.json";
import CatCard from "../elements/CatCard";

import { useState } from "react";

const Categories = () => {

  const [page, setPage] = useState({start:1, end:8});
  
  const change=(e)=>{
    setPage({
      start:e.startIndex+1,
      end:e.endIndex
    })
  }
  return (
    <>
    <div>
      <h1 className="font-bold text-xl md:text-2xl lg:text-4xl uppercase text-center  my-2 mb-8 md:my-3 lg:my-12">Juegos por categoría/Etiquetas</h1>
    </div>
     <div className="flex justify-center md:justify-end my-2">
     <Pagination numberItems={categories.length}step={8} onChange={change}/>
     </div>

      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.slice(page.start-1, page.end).map((c) => {
    
          return (
            <CatCard id={c.id} name={c.name} value={c.value} image={c.image} key={c.id} />
          );
        })}
      </div>
    </>
  );
};

export default Categories;
