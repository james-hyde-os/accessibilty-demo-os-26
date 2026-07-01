export default function AccessibleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
        <caption className="text-left font-bold mb-2 dark:text-gray-100">
          Product Information and Pricing
        </caption>
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-left font-bold dark:border-gray-700"
            >
              Product Name
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-left font-bold dark:border-gray-700"
            >
              Description
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-right font-bold dark:border-gray-700"
            >
              Price
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 text-center font-bold dark:border-gray-700"
            >
              In Stock
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium dark:border-gray-700">
              Widget A
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              High-quality widget for general use
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-700">
              $19.99
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">
              Yes
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium dark:border-gray-700">
              Widget B
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Premium widget with advanced features
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-700">
              $49.99
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">
              Yes
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium dark:border-gray-700">
              Widget C
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Professional widget for expert users
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-700">
              $99.99
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">
              No
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
