export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarPath: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};
