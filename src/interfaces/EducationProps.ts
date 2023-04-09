interface EducationProps {
  educationObject: {
    id: number;
    schoolName: string;
    degree: string;
    date: string;
  };
  onUpdate: (updatedEducationObject: {
    id: number;
    schoolName: string;
    degree: string;
    date: string;
  }) => void;
  onRemove: (id: number) => void;
}

export default EducationProps;
