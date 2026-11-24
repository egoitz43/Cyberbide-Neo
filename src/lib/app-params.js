const isNode = typeof window === 'undefined';

// Equivalente local de getAccessToken del SDK de Base44 (la ruta
// '@base44/sdk/utils/auth-utils' no existe en @base44/sdk 0.8.63 y rompía el build).
// Lee el token de la URL (?access_token=...), lo guarda en localStorage
// ('base44_access_token') y lo quita de la barra de direcciones; si no hay
// token en la URL, usa el guardado.
const getAccessToken = ({
	storageKey = 'base44_access_token',
	paramName = 'access_token',
	saveToStorage = true,
	removeFromUrl = true,
} = {}) => {
	if (isNode) return null;
	try {
		const url = new URL(window.location.href);
		const fromUrl = url.searchParams.get(paramName);
		if (fromUrl) {
			if (saveToStorage) window.localStorage.setItem(storageKey, fromUrl);
			if (removeFromUrl) {
				url.searchParams.delete(paramName);
				window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
			}
			return fromUrl;
		}
		return window.localStorage.getItem(storageKey) || null;
	} catch {
		return null;
	}
};

const isClearAccessTokenRequested = () =>
	!isNode && new URLSearchParams(window.location.search).get("clear_access_token") === 'true';

const clearStoredAccessToken = () => {
	window.localStorage.removeItem('base44_access_token');
	window.localStorage.removeItem('token');
}

const getAppParams = () => {
	if (isClearAccessTokenRequested()) {
		clearStoredAccessToken();
	}
	return {
		appId: import.meta.env.VITE_BASE44_APP_ID,
		token: getAccessToken(),
		functionsVersion: (!isNode && new URLSearchParams(window.location.search).get("functions_version")?.trim()) || import.meta.env.VITE_BASE44_FUNCTIONS_VERSION,
		appBaseUrl: import.meta.env.VITE_BASE44_APP_BASE_URL,
	}
}

export const appParams = {
	...getAppParams()
}
