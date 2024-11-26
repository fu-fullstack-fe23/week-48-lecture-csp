# week-48-lecture-csp

## CSP Headers

### Struktur

```
const cspHeader = "default-src 'self'; script-src 'self' https://trusted.cdn.com; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; img-src 'self' https://trusted.images.com;";
```

**Notera** att i exemplet ovan är det endast google-importerna som är korrekta och skall behållas, de andra två behöver ersättas med den adress ni importerar data från.

### Att inkludera

```
defaultSrc: ["'self'"], // Endast resurser från samma domän är tillåtna
scriptSrc: ["'self'", "https://trusted.cdn.com"], // Skript från 'self' och en extern CDN är tillåtna
styleSrc: ["'self'", "https://fonts.googleapis.com"], // Stilar från 'self' och en extern fonttjänst är tillåtna
fontSrc: ["'self'", "https://fonts.gstatic.com"], // Teckensnitt från 'self' och en extern fonttjänst är tillåtna
objectSrc: ["'none'"], // Inga objekt (t.ex. Flash) får användas
imgSrc: ["'self'", "https://trusted.images.com"], // Bilder från 'self' och en extern domän är tillåtna
```
