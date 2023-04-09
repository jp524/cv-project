interface WorkProps {
  workObject: {
    id: number;
    companyName: string;
    positionTitle: string;
    fromDate: string;
    untilDate: string;
    tasks: string;
  };
  onUpdate: (updatedWorkObject: {
    id: number;
    companyName: string;
    positionTitle: string;
    fromDate: string;
    untilDate: string;
    tasks: string;
  }) => void;
  onRemove: (id: number) => void;
}

export default WorkProps;
