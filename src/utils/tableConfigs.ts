export enum DataTypes {
  NUMBER = "number",
  STRING = "string",
  DATE = "date",
}

export type HeaderConfig = {
  label: string;
  type: DataTypes;
};

export const headersConfig: { [type: string]: HeaderConfig } = {
  id: { label: "ID", type: DataTypes.STRING },
  amount_cents: { label: "Amount (EGP)", type: DataTypes.NUMBER },
  currency: { label: "Currency", type: DataTypes.STRING },
  payment_status: { label: "Payment Status", type: DataTypes.STRING },
  created_at: { label: "Created At", type: DataTypes.DATE },
};
