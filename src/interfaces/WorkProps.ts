interface WorkProps {
  workObject: {
    id: number;
    companyName: string;
    positionTitle: string;
    fromDate: string;
    untilDate: string;
    tasks: string;
  };
  onUpdate: React.MouseEventHandler<HTMLButtonElement>;
  // onRemoveClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default WorkProps;
