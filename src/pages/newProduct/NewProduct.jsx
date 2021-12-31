import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <div className="newProduct__wrapper">
      <h1 className="addProduct__title">New Product</h1>
      <form className="addProduct__form">
        <div className="addProduct__item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProduct__item">
          <label>Name</label>
          <input type="text" placeholder="Airpods" />
        </div>
        <div className="addProduct__item">
          <label>Stock</label>
          <input type="text" placeholder="99+" />
        </div>
        <div className="addProduct__item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProduct__button">Create</button>
      </form>
      </div>
    </div>
  );
}
