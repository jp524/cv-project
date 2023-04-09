interface AppState {
  generalObject: {
    name: string;
    email: string;
    phone: string;
    city: string;
  };
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
