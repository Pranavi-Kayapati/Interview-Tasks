import React, { useState, useEffect } from "react";
import "./List.css";
const items = [
  "delectus aut autem",
  "fugiat veniam minus",
  "et porro tempora",
  "laboriosam mollitia et enim quasi adipisci quia provident illum",
  "qui ullam ratione quibusdam voluptatem quia omnis",
  "illo expedita consequatur quia in",
  "quo adipisci enim quam ut ab",
  "molestiae perspiciatis ipsa",
  "illo est ratione doloremque quia maiores aut",
  "vero rerum temporibus dolor",
  "ipsa repellendus fugit nisi",
  "et doloremque nulla",
  "repellendus sunt dolores architecto voluptatum",
  "ab voluptatum amet voluptas",
  "accusamus eos facilis sint et aut voluptatem",
  "quo laboriosam deleniti aut qui",
  "dolorum est consequatur ea mollitia in culpa",
  "molestiae ipsa aut voluptatibus pariatur dolor nihil",
  "ullam nobis libero sapiente ad optio sint",
  "suscipit repellat esse quibusdam voluptatem incidunt",
  "distinctio vitae autem nihil ut molestias quo",
  "et itaque necessitatibus maxime molestiae qui quas velit",
  "adipisci non ad dicta qui amet quaerat doloribus ea",
  "voluptas quo tenetur perspiciatis explicabo natus",
  "aliquam aut quasi",
  "veritatis pariatur delectus",
  "nesciunt totam sit blanditiis sit",
  "laborum aut in quam",
  "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
  "repudiandae totam in est sint facere fuga",
  "earum doloribus ea doloremque quis",
  "sint sit aut vero",
  "porro aut necessitatibus eaque distinctio",
  "repellendus veritatis molestias dicta incidunt",
  "excepturi deleniti adipisci voluptatem et neque optio illum ad",
  "sunt cum tempora",
  "totam quia non",
  "doloremque quibusdam asperiores libero corrupti illum qui omnis",
  "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
  "rerum perferendis error quia ut eveniet",
  "tempore ut sint quis recusandae",
  "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
  "velit soluta adipisci molestias reiciendis harum",
  "vel voluptatem repellat nihil placeat corporis",
  "nam qui rerum fugiat accusamus",
  "sit reprehenderit omnis quia",
  "ut necessitatibus aut maiores debitis officia blanditiis velit et",
];

const DebounceThrottle = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const filterItems = (value) => {
    return items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setFilteredList(filterItems(inputValue));
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [inputValue]);

  const throttledFilter = (func, delay) => {
    let throttled = false;
    return function () {
      if (!throttled) {
        func.apply(this, arguments);
        throttled = true;
        setTimeout(() => {
          throttled = false;
        }, delay);
      }
    };
  };

  const throttledFilterItems = throttledFilter((value) => {
    setFilteredList(filterItems(value));
  }, 300);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    throttledFilterItems(e.target.value);
  };

  return (
    <div>
      <input
        className="input-field"
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebounceThrottle;
