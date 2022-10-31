import { plantList } from "../data/plantList";
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
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
