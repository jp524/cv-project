interface AppState {
  workCounter: number;
  workObjects: {
    id: number;
    companyName: string;
    positionTitle: string;
    fromDate: string;
    untilDate: string;
    tasks: string;
  }[];
  educationCounter: number;
  educationObjects: {
    id: number;
    schoolName: string;
    degree: string;
    date: string;
  }[];
}

export default AppState;
