export default function MovementsTable() {
  const movementList = [
    {
      printer: "Administrativo",
      item: "TN-750",
      quantity: "1",
      date: "12/09/2024 - 14:35:55",
    },
    {
      printer: "Administrativo",
      item: "TN-750",
      quantity: "1",
      date: "12/09/2024 - 14:35:55",
    },
  ];

  return (
    <div className="mx-auto my-16 max-w-screen-xl px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Movimentos
          </h3>
          <p className="mt-2 text-gray-600">
            Lista de todos os movimentos cadastrados.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Adicionar impressora
          </a>
        </div>
      </div>
      <div className="relative mt-12 h-max overflow-auto">
        <table className="w-full table-auto text-left text-sm">
          <thead className="border-b font-medium text-gray-600">
            <tr>
              <th className="py-3 pr-6">Impressora</th>
              <th className="py-3 pr-6">Item</th>
              <th className="py-3 pr-6">Quantidade</th>
              <th className="py-3 pr-6">Data</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600">
            {movementList.map((item, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap py-4 pr-6">{item.printer}</td>
                <td className="whitespace-nowrap py-4 pr-6">{item.item}</td>
                <td className="whitespace-nowrap py-4 pr-6">{item.quantity}</td>
                <td className="whitespace-nowrap py-4 pr-6">{item.date}</td>
                <td className="whitespace-nowrap text-right">
                  <a
                    href="#"
                    className="rounded-lg border px-3 py-1.5 text-gray-600 duration-150 hover:bg-gray-50 hover:text-gray-500"
                  >
                    Gerenciar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
