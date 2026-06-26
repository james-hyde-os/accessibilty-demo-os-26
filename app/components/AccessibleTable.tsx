export default function AccessibleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <caption className="text-left font-bold mb-2">
          Product Information and Pricing
        </caption>
        <thead className="bg-gray-200">
          <tr>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-left font-bold"
            >
              Product Name
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-left font-bold"
            >
              Description
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-right font-bold"
            >
              Price
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-center font-bold"
            >
              In Stock
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="border border-gray-300 px-4 py-2 font-medium"
            >
              Widget A
            </td>
            <td className="border border-gray-300 px-4 py-2">
              High-quality widget for general use
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              $19.99
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Yes
            </td>
          </tr>
          <tr>
            <td
              className="border border-gray-300 px-4 py-2 font-medium"
            >
              Widget B
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Premium widget with advanced features
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              $49.99
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Yes
            </td>
          </tr>
          <tr>
            <td
              className="border border-gray-300 px-4 py-2 font-medium"
            >
              Widget C
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Professional widget for expert users
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              $99.99
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              No
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
