export default interface ImageSource {
  src: string,
  media?: string,
  sizes?: string,
  srcset?: Array<[string, string]>,
  type?: string
}