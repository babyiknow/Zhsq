export class AppConfig {
    static baseMapAddress: string;
    /* public static appUrl(){
         return "http://zhsq.cqmap.com/syl";
     }*/
    public static getBaseMapAddress(): string {
        return this.baseMapAddress;
    }
    public static setBaseMapAddress(url: string) {
        this.baseMapAddress = url;
    }
    //public static appUrl:string="/app";  
    //public static appUrl: string = "http://192.168.1.105:61186";//"http://zhsq.cqmap.com/gxc";
    public static appUrl: string = "http://zhsq.cqmap.com/syl";
}