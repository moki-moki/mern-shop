import { useEffect } from "react";
import { getProductPreview } from "../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import {
  AllProductsContainer,
  AllProductsPageContainer,
} from "../styles/AllProductsPageStyles/MainProductContainer";
import {
  CheckboxesLabels,
  SidebarCategoryCheckboxes,
  SidebarCategoryContainer,
  SidebarCategorySortContainer,
  SidebarContainer,
  SidebarSelect,
  SidebarWrapper,
} from "../styles/AllProductsPageStyles/SidebarStyles";
import ProductTeaser from "./ProductTeaser";
import { useState } from "react";
import { getProducts } from "../utils/userFetch";
import Loader from "./Loader";

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const [prod, setProd] = useState([]);
  const [cat, setCat] = useState("?");
  const [sort, setSort] = useState("");
  const { list } = useSelector((state) => state.previewProducts);

  // filter items by catagory
  useEffect(() => {
    dispatch(getProductPreview());

    // get all products depenting on catagory
    getProducts(cat).then((data) => setProd(data));
  }, [dispatch, cat]);

  const changeCat = (value) => {
    if (value) {
      let prev = value;
      setCat(cat + "&category=" + prev);
    }
  };

  // Sort handler
  const handleSort = (e) => {
    setSort("?sort=" + e.target.value);
  };

  // sorting items
  useEffect(() => {
    // sorting fucntion
    const sortData = async () => {
      if (sort !== "") {
        const req = await fetch(
          sort
            ? `/api/products/allProducts${sort}`
            : `/api/products/allProducts`
        );
        const data = await req.json();
        setProd(data);
      }

      // check if there is catagory and sort only catagory
      if (cat !== "?") {
        const req = await fetch(
          sort && cat
            ? `/api/products/allProducts${sort}&${cat}`
            : `/api/products/allProducts`
        );
        const data = await req.json();
        setProd(data);
      }
    };
    sortData();
  }, [sort]);

  /* TODO: Build server-side buttons instead of calling all products and removing duplicate values */
  // render out Check boxes and removing and duplicate values from list.product array of all items
  const btns =
    list.length === 0
      ? null
      : [
          ...list.products
            .reduce((map, obj) => map.set(obj.category, obj), new Map())
            .values(),
        ];

  return (
    <>
      {prod.length === 0 ? (
        <Loader />
      ) : (
        <AllProductsPageContainer>
          <SidebarContainer>
            <SidebarWrapper>
              <h4>Category</h4>
              <SidebarCategoryContainer>
                {list.length === 0 ? (
                  <h1>Loading..</h1>
                ) : (
                  <>
                    {btns.map((item, idx) => {
                      return (
                        <>
                          <div>
                            <SidebarCategoryCheckboxes
                              type="checkbox"
                              name={item.category}
                              key={idx}
                              value={item.category}
                              onChange={(e) =>
                                e.target.checked
                                  ? changeCat(e.target.value)
                                  : setCat(
                                      cat.replace(
                                        "&category=" + e.target.value,
                                        ""
                                      )
                                    )
                              }
                            />
                            <CheckboxesLabels htmlFor={item.category}>
                              {item.category}
                            </CheckboxesLabels>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
                {/* sort */}
                <SidebarCategorySortContainer>
                  <h4>SORT</h4>
                  <SidebarSelect defaultValue="" onChange={handleSort}>
                    <option value="">Newest</option>
                    <option value="-createdAt">Oldest</option>
                    <option value="name">Name asc</option>
                    <option value="-name">Name dsc</option>
                    <option value="price">Price asc</option>
                    <option value="-price">Price dsc</option>
                    <option value="rating">Rating asc</option>
                    <option value="-rating">Rating dsc</option>
                  </SidebarSelect>
                </SidebarCategorySortContainer>
              </SidebarCategoryContainer>
            </SidebarWrapper>
          </SidebarContainer>
          <AllProductsContainer>
            {prod.length === 0 ? (
              <h1>Loading..</h1>
            ) : (
              <>
                {prod.products.map((item, idx) => (
                  <ProductTeaser key={item._id} item={item} idx={idx} />
                ))}
              </>
            )}
          </AllProductsContainer>
        </AllProductsPageContainer>
      )}
    </>
  );
};

export default AllProductsPage;
