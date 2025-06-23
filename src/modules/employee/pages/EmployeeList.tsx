import { Link } from 'react-router-dom';

const employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager' },
  { id: 3, name: 'Robert Johnson', position: 'UI/UX Designer' },
  { id: 4, name: 'Emily Brown', position: 'QA Analyst' },
  { id: 5, name: 'Michael Davis', position: 'DevOps Engineer' },
  { id: 6, name: 'Sarah Wilson', position: 'Backend Developer' },
  { id: 7, name: 'David Lee', position: 'Frontend Developer' },
  { id: 8, name: 'Linda Taylor', position: 'HR Manager' },
  { id: 9, name: 'James Anderson', position: 'Scrum Master' },
  { id: 10, name: 'Patricia Thomas', position: 'Business Analyst' },
];

const EmployeeList = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Employee List</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        {employees.map((emp) => (
          <Link
            to={`/employees/${emp.id}`}
            key={emp.id}
            style={{
              display: 'block',
              padding: '16px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              backgroundColor: '#fafafa',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: '0.2s',
            }}
          >
            <h3 style={{ margin: '0 0 8px' }}>{emp.name}</h3>
            <p style={{ margin: 0, color: '#666' }}>{emp.position}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
