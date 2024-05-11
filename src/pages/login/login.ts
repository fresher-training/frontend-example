export class LoginLogic {
    public login(username: string, password: string): boolean {
        if (username == "ha.vo" && password == "1234") {
            return true;
        }
        return false;
    }
}