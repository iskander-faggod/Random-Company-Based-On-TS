export default interface ICompany{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
}