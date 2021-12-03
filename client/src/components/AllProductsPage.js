import { useEffect } from "react";
import { getProductPreview } from "../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import {
  AllProductsContainer,
  AllProductsPageContainer,
} from "../styles/AllProductsPageStyles/MainProductContainer";
import {
  SidebarCategoryCheckboxes,
  SidebarCategoryContainer,
  SidebarContainer,
  SidebarWrapper,
} from "../styles/AllProductsPageStyles/SidebarStyles";
import ProductTeaser from "./ProductTeaser";

const AllProductsPage = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.previewProducts);

  useEffect(() => {
    dispatch(getProductPreview());
  }, [dispatch]);

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

  console.log(btns);
  return (
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
                      <SidebarCategoryCheckboxes
                        type="checkbox"
                        name={item.category}
                        key={idx}
                        value={item.category}
                      />
                      <label htmlFor={item.category}>{item.category}</label>
                    </>
                  );
                })}
              </>
            )}
          </SidebarCategoryContainer>
        </SidebarWrapper>
      </SidebarContainer>
      <AllProductsContainer>
        {list.length === 0 ? (
          <h1>Loading..</h1>
        ) : (
          <>
            {list.products.map((item, idx) => (
              <ProductTeaser item={item} idx={idx} />
            ))}
          </>
        )}
      </AllProductsContainer>
    </AllProductsPageContainer>
  );
};

export default AllProductsPage;
