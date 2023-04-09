interface GeneralProps {
  generalObject: {
    name: string;
    email: string;
    phone: string;
    city: string;
  };
  onUpdate: (updatedGeneralObject: {
    name: string;
    email: string;
    phone: string;
    city: string;
  }) => void;
}

export default GeneralProps;
