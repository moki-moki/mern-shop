import { useEffect, useState } from "react";
import {
  AddProductInput,
  FormWrapper,
  ImageContainer,
  MainContainer,
  PictureUploadBtn,
  SecondContainer,
  SelectCategory,
} from "../styles/AddProduct/AddProductStyle";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    price: 0,
    inStock: 10,
    sale: 0,
    description: "",
    image: null,
    rating: 4.5,
    category: "",
  });

  const { name, price, sale, description, category, image } = formValues;

  const onChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formValues);
  };

  return (
    <MainContainer>
      <SecondContainer>
        <ImageContainer>
          <img
            style={{ objectFit: "contain", width: "300px" }}
            src="https://via.placeholder.com/150"
          />
        </ImageContainer>
        <FormWrapper>
          <form onSubmit={onSubmit}>
            <label htmlFor="file"> Add Product Image *</label>
            <PictureUploadBtn
              type="file"
              accept=".png,.jpeg,.jpg"
              name="file"
              required
            />

            <label htmlFor="product">Enter product name *</label>
            <AddProductInput
              name="name"
              value={name}
              required
              placeholder="Product name. . ."
              type="text"
              onChange={onChange}
            />

            <label htmlFor="product">Enter product price *</label>
            <AddProductInput
              name="price"
              value={price}
              required
              placeholder="Product price. . ."
              type="number"
              onChange={onChange}
            />

            <label htmlFor="sale">Enter Sale Price </label>
            <AddProductInput
              name="sale"
              value={sale}
              placeholder="Enter a number if product is on sale. . ."
              type="number"
              onChange={onChange}
            />

            <label htmlFor="description">Enter Product Description *</label>
            <AddProductInput
              name="description"
              value={description}
              required
              placeholder="Product description. . ."
              type="text"
              onChange={onChange}
            />

            <label htmlFor="category">Select Category *</label>
            <SelectCategory
              value={category}
              name="category"
              onChange={onChange}
            >
              <option value="">Category</option>
              <option value="bedroom">Bedroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="tech">Tech</option>
              <option value="coffee">Coffee</option>
              <option value="office">Office</option>
            </SelectCategory>
            <button type="submit">Submit</button>
          </form>
        </FormWrapper>
      </SecondContainer>
    </MainContainer>
  );
};

export default AddProduct;
