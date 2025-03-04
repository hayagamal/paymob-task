import { Table, TableProps } from "antd";
import styled from "styled-components";
import { HeaderConfig } from "../../utils/tableConfigs";
import { getFormatter } from "../../utils/formatters";

export type TableComponentProps = {
  headersConfig: { [type: string]: HeaderConfig };
  data: Record<string, number | string | Date>[];
};

export default function TableComponent({
  headersConfig,
  data,
}: TableComponentProps) {
  const columns: TableProps<any>["columns"] = Object.entries(headersConfig).map(
    ([key, { label, type }]) => ({
      title: label,
      dataIndex: key,
      key,
      sorter:
        key === "amount_cents" || key === "created_at"
          ? (a, b) => {
              if (key === "amount_cents") return a[key] - b[key];
              if (key === "created_at")
                return new Date(a[key]).getTime() - new Date(b[key]).getTime();
              return 0;
            }
          : false,
      render: (value, record) => getFormatter(type, record)(value),
    })
  );

  return (
    <TableWrapper>
      <StyledTable
        columns={columns}
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
        pagination={false}
      />
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  padding: 20px;
  background: #f4f7fb;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled(Table)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  .ant-table-thead > tr > th {
    background: var(--primary-color);
    color: #01338d;
    font-size: 14px;
    cursor: pointer;
  }
`;
