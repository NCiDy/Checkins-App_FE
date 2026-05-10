export default function AdminPage() {
  return (
    <div className="min-h-screen bg-white p-6 text-black">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black">
          Dashboard Overview
        </h2>
        <p className="mt-1 text-black">
          System statistics and activity
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white border border-black rounded-xl p-6">
          <p className="text-sm text-black">Total Users</p>
          <h3 className="text-3xl font-bold mt-2 text-black">
            1,250
          </h3>
        </div>

        <div className="bg-white border border-black rounded-xl p-6">
          <p className="text-sm text-black">Orders</p>
          <h3 className="text-3xl font-bold mt-2 text-black">
            320
          </h3>
        </div>

        <div className="bg-white border border-black rounded-xl p-6">
          <p className="text-sm text-black">Revenue</p>
          <h3 className="text-3xl font-bold mt-2 text-black">
            $12,400
          </h3>
        </div>

      </div>

      {/* ACTIVITY */}
      <div className="mt-10 bg-white border border-black rounded-xl p-6">

        <h3 className="text-lg font-semibold mb-4 text-black">
          Recent Activity
        </h3>

        <div className="space-y-4 text-black">

          <div className="flex justify-between">
            <span>New user registered</span>
            <span>2 min ago</span>
          </div>

          <div className="flex justify-between">
            <span>Order #123 completed</span>
            <span>10 min ago</span>
          </div>

          <div className="flex justify-between">
            <span>Revenue updated</span>
            <span>1 hour ago</span>
          </div>

        </div>

      </div>

    </div>
  );
}