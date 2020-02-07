import algoliasearch from 'algoliasearch';
import {APPLICATION_ID, API_KEY} from '../../utils/constants';

export const algoliaClient = algoliasearch(APPLICATION_ID, API_KEY);

export const searchClient = algoliasearch(
    '0X6V7G3F7X',
    '0d50ed18bc93be8ac7d71c8ecc6fb9c2',
);
