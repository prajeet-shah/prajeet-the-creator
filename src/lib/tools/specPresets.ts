export const imagePresets = {
  custom: {
    label: "Custom Requirements",
    widthPx: "",
    heightPx: "",
    maxSizeKB: "100",
    format: "jpg",
    description: "Enter your own custom dimensions and maximum size."
  },
  iccrPhoto: {
    label: "ICCR Passport Photo",
    widthPx: "350",
    heightPx: "450",
    maxSizeKB: "50",
    format: "jpg",
    description: "Standard passport photo dimensions for ICCR application."
  },
  compexPhoto: {
    label: "COMPEX Photo",
    widthPx: "300",
    heightPx: "400",
    maxSizeKB: "100",
    format: "jpg",
    description: "Passport photo format for COMPEX scholarship."
  }
};

export const signaturePresets = {
  custom: {
    label: "Custom Requirements",
    widthPx: "",
    heightPx: "",
    maxSizeKB: "50",
    format: "jpg",
    description: "Enter your own custom dimensions and maximum size."
  },
  iccrSignature: {
    label: "ICCR Signature",
    widthPx: "400",
    heightPx: "150",
    maxSizeKB: "20",
    format: "jpg",
    description: "Signature dimensions for ICCR application."
  }
};
