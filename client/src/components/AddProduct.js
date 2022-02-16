import { useState } from "react";
import { useSelector } from "react-redux";
import {
  AddProductInput,
  FormWrapper,
  ImageContainer,
  MainContainer,
  PictureUploadBtn,
  SecondContainer,
  SelectCategory,
} from "../styles/AddProduct/AddProductStyle";
import { createProduct, uploadFile } from "../utils/userFetch";
import SuccessMessage from "./SuccessMessage";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    sale: "",
    description: "",
    img: null,
    cat: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // gets user for verify token
  const user = useSelector((state) => state.user.currentUser);

  const { name, price, description, img, cat, sale } = formValues;

  const onChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  /*SUBMIT HANDLER*/
  const submitHandler = async (e) => {
    e.preventDefault();

    // parses string to num for db
    let num = parseInt(price);
    let saleNum = parseInt(sale);

    //makes new product object
    const newProduct = {
      name,
      price: num,
      description,
      image: img,
      category: cat,
      sale: saleNum,
    };

    if (img) {
      const data = new FormData();
      const fileNameStored = Date.now() + img.name;

      data.append("name", fileNameStored);
      data.append("file", img);
      newProduct.image = fileNameStored;

      try {
        // uploads image
        await uploadFile(data);
      } catch (error) {
        console.log(error);
      }
    }

    // creates a product
    try {
      if (
        newProduct.image !== null &&
        newProduct.name !== "" &&
        newProduct.price !== 0 &&
        newProduct.description !== "" &&
        newProduct.category !== ""
      ) {
        createProduct(
          newProduct.name,
          newProduct.image,
          newProduct.price,
          newProduct.description,
          newProduct.category,
          newProduct.sale,
          user.accessToken
        );

        // shows message and then deletes it after 4s
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 4000);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContainer>
      {showSuccessMessage ? <SuccessMessage /> : null}
      <SecondContainer>
        <ImageContainer>
          <div style={{ width: "300px", height: "300px" }}>
            {img ? (
              <img
                style={{ width: "100%", height: "100%" }}
                src={URL.createObjectURL(img)}
              />
            ) : (
              <img
                style={{ width: "300px", height: "100%" }}
                src="https://via.placeholder.com/150"
              />
            )}
          </div>
        </ImageContainer>
        <FormWrapper>
          <form onSubmit={submitHandler}>
            <label htmlFor="file"> Add Product Image *</label>
            <PictureUploadBtn
              type="file"
              accept=".png,.jpeg,.jpg"
              name="file"
              onChange={(e) => setFormValues({ img: e.target.files[0] })}
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

            <label htmlFor="sale">Enter Sale Price</label>
            <AddProductInput
              name="sale"
              value={sale}
              placeholder="Enter sale price. . ."
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

            <label htmlFor="cat">Select Category *</label>

            <SelectCategory value={cat} name="cat" onChange={onChange}>
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
