import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const { id } = useParams();

  return <div>Employee Details for ID: {id}</div>;
};

export default EmployeeDetails;
