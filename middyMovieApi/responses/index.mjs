// Detta är enbart för att visa strukturen!
// const cspHelmetExample = {
//     defaultSrc: ["'self'"], // Endast resurser från samma domän är tillåtna
//     scriptSrc: ["'self'", "https://trusted.cdn.com"], // Skript från 'self' och en extern CDN är tillåtna
//     styleSrc: ["'self'", "https://fonts.googleapis.com"], // Stilar från 'self' och en extern fonttjänst är tillåtna
//     fontSrc: ["'self'", "https://fonts.gstatic.com"], // Teckensnitt från 'self' och en extern fonttjänst är tillåtna
//     objectSrc: ["'none'"], // Inga objekt (t.ex. Flash) får användas
//     connectSrc: ["'self'"], // Endast tillåtet att ansluta till samma domän
//     imgSrc: ["'self'", "https://trusted.images.com"], // Bilder från 'self' och en extern domän är tillåtna
// }

const cspHeader = "default-src 'self'; script-src 'self' https://kit.fontawesome.com https://cdnjs.cloudflare.com; style-src 'self' https://kit.fontawesome.com https://fonts.googleapis.com; font-src 'self' https://kit.fontawesome.com https://fonts.gstatic.com; object-src 'none'; img-src 'self' https://images.unsplash.com;";

export const sendResponse = (statusCode, body) => {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Content-Security-Policy' : cspHeader,
        },
        body: JSON.stringify({
        data : body
        }),
    };
}

export const sendResponseWithHeaders = (statusCode, body, token) => {    
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token,
            'Content-Security-Policy' : cspHeader,
        },
        body: JSON.stringify({
            data: body,
            token : token
        }),
    };
};
