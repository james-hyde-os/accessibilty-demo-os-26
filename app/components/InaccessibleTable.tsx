export default function InaccessibleTable() {
  return (
    <div className="overflow-x-auto">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#ccc" }}>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Product Name
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Description
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Price
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              In Stock
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Widget A
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              High-quality widget
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              $19.99
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Yes</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Widget B
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Premium widget
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              $49.99
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Yes</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Widget C
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Professional widget
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              $99.99
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
