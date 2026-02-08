import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center py-10">
      {data.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
