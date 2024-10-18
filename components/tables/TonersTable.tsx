export default function TonersTable() {
  const tonerList = [
    {
      name: "TN-315",
      stock: "2",
      status: "Suficiente",
      printerCount: "2",
      unitPrice: "R$ 120,00",
    },
    {
      name: "TN-750",
      stock: "3",
      status: "Bom",
      printerCount: "4",
      unitPrice: "R$ 175,00",
    },
    {
      name: "OKI-B431",
      stock: "1",
      status: "Acabando",
      printerCount: "4",
      unitPrice: "R$ 79,00",
    },
    {
      name: "TN-3382",
      stock: "0",
      status: "Esgotado",
      printerCount: "1",
      unitPrice: "R$ 79,00",
    },
  ];

  return (
    <div className="mx-auto my-16 max-w-screen-xl px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Toners
          </h3>
          <p className="mt-2 text-gray-600">
            Lista de todos os toners cadastrados.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Adicionar toner
          </a>
        </div>
      </div>
      <div className="relative mt-12 h-max overflow-auto">
        <table className="w-full table-auto text-left text-sm">
          <thead className="border-b font-medium text-gray-600">
            <tr>
              <th className="py-3 pr-6">Nome</th>
              <th className="py-3 pr-6">Quantidade</th>
              <th className="py-3 pr-6">Status</th>
              <th className="py-3 pr-6">Usado em X impressoras</th>
              <th className="py-3 pr-6">Preço Unitário</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600">
            {tonerList.map((item, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap py-4 pr-6">{item.name}</td>
                <td className="whitespace-nowrap py-4 pr-6">{item.stock}</td>
                <td className="whitespace-nowrap py-4 pr-6">
                  <span
                    className={`rounded-full px-3 py-2 text-xs font-semibold ${
                      item.status === "Bom"
                        ? "bg-green-50 text-green-600"
                        : item.status === "Suficiente"
                          ? "bg-blue-50 text-blue-600"
                          : item.status === "Acabando"
                            ? "bg-orange-50 text-orange-600"
                            : item.status === "Esgotado"
                              ? "bg-red-50 text-red-600"
                              : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="whitespace-nowrap py-4 pr-6">
                  {item.printerCount}
                </td>
                <td className="whitespace-nowrap py-4 pr-6">
                  {item.unitPrice}
                </td>
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
