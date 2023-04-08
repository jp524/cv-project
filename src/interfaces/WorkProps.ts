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
  onRemove: React.MouseEventHandler<HTMLButtonElement>;
}

export default WorkProps;
