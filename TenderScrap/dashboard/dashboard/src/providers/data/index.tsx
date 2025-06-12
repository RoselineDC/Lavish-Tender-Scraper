import { GraphQLClient } from 'graphql-request';

export const API_URL = 'https://api.lavish-tender.com/graphql';

export const client = new GraphQLClient( API_URL, { })