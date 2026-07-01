export default function InaccessibleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700">
              Product Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700">
              Description
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700">
              Price
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700">
              In Stock
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Widget A
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              High-quality widget
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              $19.99
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Yes
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Widget B
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Premium widget
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              $49.99
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Yes
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Widget C
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              Professional widget
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              $99.99
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
              No
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
