export const API_URL = "https://api.github.com";

export const searchRepos = (query: string): void => {
    fetch(`${API_URL}/search/repositories?q=${query}`)
} 