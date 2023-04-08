interface EducationProps {
  educationObject: {
    id: number;
    schoolName: string;
    degree: string;
    date: string;
  };
  onUpdate: React.MouseEventHandler<HTMLButtonElement>;
  onRemove: React.MouseEventHandler<HTMLButtonElement>;
}

export default EducationProps;
