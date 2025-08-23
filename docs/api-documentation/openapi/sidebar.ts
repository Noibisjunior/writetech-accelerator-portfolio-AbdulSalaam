import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-documentation/openapi/chimoney-api-reference",
    },
    {
      type: "category",
      label: "Payouts",
      items: [
        {
          type: "doc",
          id: "api-documentation/openapi/send-a-payment-to-email-or-phone",
          label: "send a payment to email or phone",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Redeem",
      items: [
        {
          type: "doc",
          id: "api-documentation/openapi/redeem-a-chimoney-as-a-gift-card",
          label: "Redeem a Chimoney as a gift card",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Wallets",
      items: [
        {
          type: "doc",
          id: "api-documentation/openapi/list-multicurrency-wallets",
          label: "list multicurrency wallets",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
