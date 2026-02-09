import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap gap-8 justify-center items-stretch">
        {data.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
