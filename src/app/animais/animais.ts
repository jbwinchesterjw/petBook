export interface Animal {
  id: number;
  postData: Date;
  url: string;
  description: string;
  allowComents: boolean;
  likes: number;
  commets: number;
  userId: number;
}
export type Animais = Array<Animal>;
