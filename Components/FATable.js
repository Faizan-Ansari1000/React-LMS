export default function FATable(props) {
    const { columns, data } = props;

    return (
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white p-4">
            <table className="min-w-full text-left table-auto">
                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((x, i) => (
                            <th key={i} className="py-3 px-4 text-sm font-medium text-gray-700 uppercase tracking-wider">
                                {x.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((x, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            {columns.map((col, colInd) => (
                                <td key={colInd} className="py-3 px-4 text-sm text-gray-900">
                                    {x[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
