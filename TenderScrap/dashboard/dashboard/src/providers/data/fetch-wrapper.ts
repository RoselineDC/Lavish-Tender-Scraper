


const customFetch = async (url: string, options: RequestInit) => {
    // auth headers and access
    const accessToken = localStorage.getItem("access_token");

    // get headers
    const headers = options.headers as Record<string, string>;

    return await fetch(url, {
        ...options,
        headers: {
            ...headers,
            "Content-Type": "application/json",
            Authorization: headers?.Authorization || `Bearer ${accessToken}`,
            "Apollo-Require-Preflight": "true",
        },
    });

}

const getGraphErrors = (body: Record<"errors", GraphQLFormattedError[] | undefined>) => {}