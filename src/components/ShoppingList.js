import { plantList } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../style/ShoppingList.css";
// console.log(plantList);

function ShoppingList() {
  let categoriesArray = [];
  for (let i in plantList) {
    categoriesArray.push(plantList[i].category);
  }
  let deleteDuplicates = new Set(categoriesArray);
  let categories = [...deleteDuplicates];

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
