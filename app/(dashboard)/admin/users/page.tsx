const users = [
  { id: 1, name: "Nguyen Van A", email: "a@gmail.com" },
  { id: 2, name: "Tran Thi B", email: "b@gmail.com" },
  { id: 3, name: "Le Van C", email: "c@gmail.com" },
];

export default function UsersPage() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Users Management
      </h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}