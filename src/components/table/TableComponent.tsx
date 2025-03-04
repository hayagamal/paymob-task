import { getFormatter } from "../../utils/formatters";
import { HeaderConfig } from "../../utils/tableConfigs";
import styled from "styled-components";

export type TableComponentProps = {
  headersConfig: { [type: string]: HeaderConfig };
  data: Record<string, number | string | Date>[];
};

export default function TableComponent({
  headersConfig,
  data,
}: TableComponentProps) {
  if (data.length === 0) {
    return <EmptyMessage>No data available</EmptyMessage>;
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {Object.entries(headersConfig).map(([key, { label }]) => (
              <TableHeader key={key}>{label}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((payment, index) => (
            <TableRow key={index}>
              {Object.entries(headersConfig).map(([key, header]) => {
                const cellValue = payment[key];
                const formatter = getFormatter(header.type, payment);
                const formattedValue = formatter(cellValue);

                return <TableCell key={key}>{formattedValue}</TableCell>;
              })}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  overflow-x: auto;
  padding: 20px;
  background: var(--background-wrapper);
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  background: var(--primary-color);
  color: white;
  padding: 15px;
  text-align: left;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: var(--background-hover);
    cursor: pointer;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid var(--border-color);
  text-align: left;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: var(--empty-table);
  font-size: 16px;
`;
