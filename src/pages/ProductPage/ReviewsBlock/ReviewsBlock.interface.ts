export interface GameReview {
  username: string;
  id: number;
  time: string;
  review?: string;
  pros?: string;
  cons?: string;
  rating: number;
}
