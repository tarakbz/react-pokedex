/**
 *
 */
export default class AuthenticationService {

    static isAuthenticated = false;

    static login(username, password) {

        const isAuthenticated = (username === "advil" && password === "advil");

        return new Promise(resolve => {
            setTimeout(
                () => {
                    this.isAuthenticated = isAuthenticated;
                    resolve(isAuthenticated)
                }, 1000
            );
        });
    }

    static logout() {

    }
}
