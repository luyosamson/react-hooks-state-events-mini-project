import React from "react";

function CategoryFilter({categories,mySelect,onMyselect}) {

const myCategory=categories.map((category)=>{

const className=category===mySelect ? "selected" : null;
return <button
key={category}
className={className}
onClick={()=>onMyselect(category)}
>
{category}
</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {myCategory}
    </div>
  );
}

export default CategoryFilter;

