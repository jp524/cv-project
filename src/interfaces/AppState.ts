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
  educationIds: number[];
  educationCounter: number;
}

export default AppState;
