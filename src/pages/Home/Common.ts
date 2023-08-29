interface contactInfosJsonType {
  head: string;
  children: string[];
  type: "string" | "link" | "mail" | "phone";
}

export const contactInfoList: contactInfosJsonType[] = [
  {
    head: "Location",
    children: ["this is a sample location if this is a sample", "if this is a sample"],
    type: "string",
  },
  {
    head: "Phone Number",
    children: ["+91-8921496312", "+91-8924589292"],
    type: "phone",
  },
  {
    head: "Web",
    children: ["lusaiblatheef.com", "lusaiblatheef.com"],
    type: "link",
  },
  {
    head: "Email",
    children: ["lusaiblatheef@gmail.com", "lusaiblatheef@gmail.com"],
    type: "mail",
  },
  {
    head: "Email",
    children: ["lusaiblatheef@gmail.com", "lusaiblatheef@gmail.com"],
    type: "mail",
  },
];
