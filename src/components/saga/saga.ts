import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../slice/slice";
import { fetchProductsApi } from "../service/service";
import { Product } from "../slice/slice"; // Ensure Product type is imported

// Worker Saga: Fetch products
function* fetchProductsSaga(): Generator<any, void, Product[]> {
  try {
    const products: Product[] = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(products)); // Dispatch success action
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message)); // Dispatch failure action
  }
}

// Watcher Saga: Watches for fetchProducts action
function* fetchDataWatcher(): Generator {
  yield takeLatest(fetchProducts.type, fetchProductsSaga);
}

// Root Saga
export default function* rootSaga(): Generator {
  yield all([fetchDataWatcher()]);
}
