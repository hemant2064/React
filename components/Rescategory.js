
import MenuItemList from "./MenuItemList";

const Rescategory = ({
  data,
  showItems,
  setShowIndex,
}) => {
  const items = data?.itemCards || [];

  return (
    <section className="my-3 overflow-hidden rounded-xl border bg-white shadow-sm sm:my-4">

      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 p-4 text-left sm:p-5"
        onClick={setShowIndex}
      >
        <h2 className="min-w-0 text-sm font-bold sm:text-base">
          {data.title} ({items.length})
        </h2>

        <span className="shrink-0">
          {showItems ? "⬆️" : "⬇️"}
        </span>
      </button>

      {showItems && (
        <MenuItemList items={items} />
      )}
    </section>
  );
};

export default Rescategory;