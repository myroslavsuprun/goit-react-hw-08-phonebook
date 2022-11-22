import { credentialsSlice } from './credentialsSlice';
import { filterSlice } from './filterSlice';

export const selectFilter = state => state[filterSlice.name];

export const selectCredentials = state => state[credentialsSlice.name];
