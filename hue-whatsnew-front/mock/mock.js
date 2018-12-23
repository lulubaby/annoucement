import {product} from './data/product';
import fetchMock from 'fetch-mock'

export default {
    start() {
        fetchMock.get('/whatsnew/product', () => {
            return product;
        });
    }
}