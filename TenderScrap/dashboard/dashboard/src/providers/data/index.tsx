import { GraphQLClient } from 'graphql-request';

export const API_URL = 'https://api.crm.refine.dev/';

export const client = new GraphQLClient( API_URL, { 
    fetch: (url: string, options: RequestInit) => {
        try{
            
        }

    }
})