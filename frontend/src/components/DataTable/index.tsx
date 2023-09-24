import { useEffect, useState } from "react";
import { SalePage } from "../../types/sale";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";
import { formatLocalDate } from "../../utils/format";
import Pagination from "../Pagination";

const DataTable = () => {

  const [activePage, setActivePage] = useState(0);

  const [page, setPage] = useState<SalePage>({
    last: true,
    totalPages: 0,
    totalElements: 0,
    number: 0,
    first: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=date,desc`)
      .then((response) => {
        const data = response.data as SalePage;
        setPage(data);
      });
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  }

  return (
    <>
      <Pagination page={page} onPageChange={changePage}/>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((sale: any) => (
              <tr key={sale.id}>
                <td>{formatLocalDate(sale.date, "dd/MM/yyyy")}</td>
                <td>{sale.seller.name}</td>
                <td>{sale.visited}</td>
                <td>{sale.deals}</td>
                <td>{sale.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
