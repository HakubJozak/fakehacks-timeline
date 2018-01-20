export function getTokens() {
    if (localStorage) {
        return JSON.parse(localStorage.getItem('tokens'));
    }
    return null;
}

export function setTokens(tokens) {
    if (localStorage) {
        localStorage.setItem('tokens', JSON.stringify(tokens));
    }
}

export function clearTokens() {
    if (localStorage) {
        localStorage.clear();
    }
}
