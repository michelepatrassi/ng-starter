export interface MetaTags {
  title: string;
  description: string;
  url: string;
  keywords?: string;
  image?: {
    url: string;
    width: number | string;
    height: number | string;
  };
}
