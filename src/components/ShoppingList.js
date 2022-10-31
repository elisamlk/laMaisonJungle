import { plantList } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../style/ShoppingList.css";
// console.log(plantList);

// function ShoppingList() {
//   let categoriesArray = [];
//   for (let i in plantList) {
//     categoriesArray.push(plantList[i].category);
//   }
//   let deleteDuplicates = new Set(categoriesArray);
//   let categories = [...deleteDuplicates];

//   return (
//     <div>
//       <ul>
//         {categories.map((cat) => (
//           <li key={cat}>{cat}</li>
//         ))}
//       </ul>
//       <ul className="lmj-plant-list">
//         {plantList.map(({ id, cover, name, water, light }) => (
//           <PlantItem
//             id={id}
//             cover={cover}
//             name={name}
//             water={water}
//             light={light}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <div key={id}>
            <PlantItem cover={cover} name={name} water={water} light={light} />
            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
