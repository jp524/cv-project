interface WorkState {
  updating: Boolean;
  companyName: string;
  positionTitle: string;
  fromDate: string;
  untilDate: string;
  tasks: string;
  workState: {
    companyName: string;
    positionTitle: string;
    fromDate: string;
    untilDate: string;
    tasks: string;
  };
}

export default WorkState;
