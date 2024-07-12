/**
    * An array of routes that are accessible to the public
    * these routes dos not require authentication
    * @type {string[]} 
 */
export const publicRoutes = ["/", "/Nosotros", "/Soluciones", "/Ayuda", "/Franquicia", "Pago"];

/**
 * An array of routes that are used for autentication
 * These roetes will redirect logged in users to / settings
 * @type {string[]}
 */

export const authRoutes = ["/login", "/register", "/error"];

/**
 * The prefix for API  authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/admin";