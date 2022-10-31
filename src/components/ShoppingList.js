import { plantList } from "../data/plantList";
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
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
