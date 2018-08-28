import ITag from "./ITag";

export default interface IArticle {
  _id: number,
  title: string,
  description: string,
  text: string,
  source: string,
  tag?: ITag
}