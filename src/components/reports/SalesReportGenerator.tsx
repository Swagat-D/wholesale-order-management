export default function SalesReportGenerator() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Generate Sales Report</h3>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Download PDF
      </button>
      {/* Add Chart.js integration here */}
    </div>
  );
}