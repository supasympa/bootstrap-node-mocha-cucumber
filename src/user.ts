
interface IUser {
    id: string;
    valuation: number;
    login(id: string): void;
    getAccount(): void;
}

class User implements IUser{
    public id: string;
    public valuation: number;

    constructor() {
        this.id = "";
        this.valuation = 0;
    }

    public login(id: string) {
        this.id = id;
    }

    public getAccount() {
        switch (this.id) {
            case "JANE0002":
                this.valuation = 2000;
                break;
            default:
                this.valuation = 1000;
        }
    }
}

export default User;
