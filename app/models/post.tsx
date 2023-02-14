import ImageSource from "./imagesource";

export interface PostProps {
  type: PostType,
  content: string,
  summary: string,
  kicker?: string,
  title: string,
  subtitle?: string,
  coverImage?: string,
  coverImageSrcSet?: Array<[string, string]>,
  theme?: PostTheme
}

export default class Post implements PostProps {
  type: PostType;
  content: string;
  summary: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  coverImage?: string;
  coverImageSrcSet?: Array<[string, string]>;
  theme?: PostTheme;

  constructor(props: PostProps) {
    this.type = props.type;
    this.content = props.content;
    this.summary = props.summary;
    this.kicker = props.kicker;
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.coverImage = props.coverImage;
    this.coverImageSrcSet = props.coverImageSrcSet;
    this.theme = props.theme;

    if (!this.theme) {
      let charCodeSum = 0;
      let i;
      for (i = 0; i < this.title.length; i++) {
        charCodeSum += this.title.charCodeAt(i);
        charCodeSum %= 6;
      }
      this.theme = charCodeSum;
    }
  }
}

export enum PostTheme {
  orange,
  magenta,
  violet,
  blue,
  green,
  lime
}
export type PostType = "gemtext" | "markdown" | "wordpress";
