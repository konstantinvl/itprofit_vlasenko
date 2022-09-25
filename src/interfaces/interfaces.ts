export interface InfoCase {
  title: string;
  description: string;
  branch: string;
  type: string;
  industry: string;
}
export interface CasePageData {
  background: string;
  image: string;
  description: InfoCase;
  balls: BallData[];
  ballBackground: string;
}

export interface BallData {
  top: number;
  left: number;
  size: number;
}
