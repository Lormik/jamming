const clientId = 'b65383d105634652a1f51b3387d641dc';
const redirectUri = "http://localhost:3000/";

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresTokenMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        if (accessTokenMatch && expiresTokenMatch) {
            accessToken = accessTokenMatch;
            const expiresIn = Number(expiresTokenMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;

            window.location = accessURL;
        }
    }

    
    
};

export default Spotify;