import MenuItemList from "./MenuItemList";
const Rescategory = ({ data }) => {
    console.log(data)
  return (
    <div className="border p-3 my-3">
      <div className="flex justify-between">
        <h2>
          {data.title} ({data.itemCards.length})
        </h2>

        <span>⬇️</span>
      </div>

      <MenuItemList items={data.itemCards} />
    </div>
  );
};

export default Rescategory;
