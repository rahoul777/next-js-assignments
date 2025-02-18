import Link from 'next/link';

const employees = [
  { id: '101', name: 'John Doe' },
  { id: '102', name: 'Jane Smith' },
];

export default function Employees() {
  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            <Link href={`/employees/${emp.id}`}>{emp.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}