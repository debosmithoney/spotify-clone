//https://developer.sppotify.com/documentation/web-playback-sdk/quick-start/


export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectURI= "http://localhost:3000/";
const clientId="955045564c1c452bad2fb3ad77d870d0";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse= () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts= item.split('=');
    })
}

export const loginUrl =`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;