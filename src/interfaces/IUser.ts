interface IUser {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
}

export default IUser;