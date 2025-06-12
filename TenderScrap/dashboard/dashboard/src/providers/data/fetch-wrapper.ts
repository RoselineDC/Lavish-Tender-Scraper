


const customFetch = async (url: string, options: RequestInit) => {
    // auth headers and access
    const accessToken = localStorage.getItem("access_token");

    // get headers
    const headers = options.headers as Record<string, string> | undefined;

}