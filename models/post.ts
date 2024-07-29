export class post{
  id!: number;
  logo!:string;
  accName!:string;
  hashtag!:string;
  date!:string;
  caption!:string;
  image!:string;
  comments!:string;
  retweet!:string;
  heart!:string;
  view!:string;
  constructor() {
    this.date = "now"
    this.comments = "0";
    this.retweet = "0";
    this.heart = "0";
    this.view = "0";
    this.logo = "assets\\vendors\\imgs\\logo.jpg"
    this.accName = "Omar3327"
    this.hashtag = "@Omar3327436158"
  }
}
