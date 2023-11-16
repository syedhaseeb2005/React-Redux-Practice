import { configureStore,} from "@reduxjs/toolkit";
import { productReducer, selectedproductReducer } from "../Redux/reducers/productReducer";

const store = configureStore({
    reducer :{
        allProduct : productReducer,
        product : selectedproductReducer
    }
});
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


export default store;
