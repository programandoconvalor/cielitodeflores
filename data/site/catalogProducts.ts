import { siteData } from "./siteData";

/* ============================================================
 * TYPES
 * ============================================================ */

export type BadgeType =
  | "new"
  | "customized"
  | "specialDay"
  | "bestSeller"
  | null;

export type ProductVariantId = "aire" | "helio";

export type CatalogCategory = {
  id: string;
  label: string;
  productCategoryIds: string[];
  ui: {
    arrowsOnHover: boolean;
  };
};

export type CatalogMenuGroup = {
  id: string;
  label: string;
  items: string[];
};

export type CatalogBranding = {
  businessType: string;
  businessName: string;
  sectionLabel: string;
  logoSrc: string;
};

export type ProductSizeOption = {
  id: ProductVariantId;
  priceMxn: number;
  buttonLabel: string;
  titleLabel: string;
  images: string[];
};

export type ProductSize = {
  id: string;
  label: string;
  priceMxn: number;
  subtitle: string;
};

export type ProductMenuAssignment = {
  groupId: string;
  subcategory: string;
};

export type CatalogProduct = {
  id: number;
  categoryId: string;
  titleTemplate?: string;
  baseTitle: string;
  subtitle?: string;
  badgeLabel?: string;
  defaultVariantId?: ProductVariantId;
  basePriceMxn: number;
  defaultImages: string[];
  activeSizeOptions: ProductSizeOption[];
  productSizes?: ProductSize[];
  colorDots: string[];
  badge: BadgeType | "";
  deliveryMessage?: string;
  sku: string;
  menuAssignments: ProductMenuAssignment[];
  ui: {
    showBadge: boolean;
    showDeliveryDate: boolean;
    showColorDots: boolean;
    showProductSizes?: boolean;
    showStandard?: boolean;
    showPremium?: boolean;
    showLuxury?: boolean;
  };
};

/* ============================================================
 * CATEGORIES VIP
 * ============================================================ */

export const catalogCategories: CatalogCategory[] = [
  {
    id: "all",
    label: "Todos",
    productCategoryIds: ["rosas", "gerberas", "corazones", "girasoles", "combinados"],
    ui: { arrowsOnHover: true },
  },
  { id: "rosas", label: "Rosas", productCategoryIds: ["rosas"], ui: { arrowsOnHover: true } },
  { id: "gerberas", label: "Gerberas", productCategoryIds: ["gerberas"], ui: { arrowsOnHover: true } },
  { id: "corazones", label: "Corazones", productCategoryIds: ["corazones"], ui: { arrowsOnHover: true } },
  { id: "girasoles", label: "Girasoles", productCategoryIds: ["girasoles"], ui: { arrowsOnHover: true } },
  { id: "combinados", label: "Combinados", productCategoryIds: ["combinados"], ui: { arrowsOnHover: true } },
];

/* ============================================================
 * MENU TREE GENERAL
 * ============================================================ */

export const catalogMenuTree: CatalogMenuGroup[] = [
  { id: "rosas", label: "Rosas", items: ["Todos"] },
  { id: "gerberas", label: "Gerberas", items: [] },
  { id: "corazones", label: "Corazones", items: [] },
  { id: "girasoles", label: "Girasoles", items: [] },
  { id: "combinados", label: "Combinados", items: [] },
];

/* ============================================================
 * BRANDING
 * ============================================================ */

export const catalogBranding: CatalogBranding = {
  businessType: siteData.brand.businessType,
  businessName: siteData.brand.businessName,
  sectionLabel: siteData.brand.sectionLabel,
  logoSrc: siteData.brand.logoSrc,
};

/* ============================================================
 * VIP PRODUCTS
 *
 * Se incluyen las 41 imágenes del catálogo.
 * Cada imagen se mantiene como producto independiente para que
 * ninguna fotografía quede fuera del catálogo.
 * Los nombres, precios y variantes son propuestas comerciales
 * iniciales y pueden ajustarse posteriormente.
 * ============================================================
 */

export const catalogProducts: CatalogProduct[] = [
  {
    id: 1001,
    categoryId: "combinados",
    baseTitle: "Bouquet otoño mágico",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 580,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_1.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 750,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1001",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
  showBadge: true,
  showDeliveryDate: false,
  showColorDots: false,
  showProductSizes: false,
  showStandard: false,
  showPremium: false,
  showLuxury: false,
},
  },
  {
    id: 1002,
    categoryId: "girasoles",
    baseTitle: "Ramo elegante girasol",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 700,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_2.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5300,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GIS-1002",
    menuAssignments: [
      {
        groupId: "girasoles",
        subcategory: "GIRASOLES",
      },
    ],
    ui: {
  showBadge: true,
  showDeliveryDate: false,
  showColorDots: false,
  showProductSizes: false,
  showStandard: false,
  showPremium: false,
  showLuxury: false,
},
  },
  {
    id: 1003,
    categoryId: "girasoles",
    baseTitle: "Bouquet amor girasol",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 490,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_3.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5900,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9200,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GIS-1003",
    menuAssignments: [
      {
        groupId: "girasoles",
        subcategory: "GIRASOLES",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1004,
    categoryId: "combinados",
    baseTitle: "Bouquet lirios y gerbera",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 1250,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_4.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5100,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7900,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1004",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1005,
    categoryId: "corazones",
    baseTitle: " Corazón gerberas",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 680,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_5.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4800,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5800,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7400,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COR-1005",
    menuAssignments: [
      {
        groupId: "corazones",
        subcategory: "CORAZONES",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  
  {
    id: 1031,
    categoryId: "corazones",
    baseTitle: "Bouquet pompones armenia",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 490,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_31.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 7000,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 8500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 10900,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COR-1031",
    menuAssignments: [
      {
        groupId: "corazones",
        subcategory: "CORAZONES",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1006,
    categoryId: "gerberas",
    baseTitle: "Detalle alegría",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 380,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_6.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5600,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6800,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1006",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1007,
    categoryId: "combinados",
    baseTitle: "Bouquet armenia elegante",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 550,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_7.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4300,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 6700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1007",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1008,
    categoryId: "combinados",
    baseTitle: "Arreglo lirios perfección",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 680,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_8.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4800,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5800,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7400,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1008",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1009,
    categoryId: "gerberas",
    baseTitle: "Bouquet amor pastel",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 750,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_9.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5100,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7900,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1009",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1010,
    categoryId: "rosas",
    baseTitle: "Bouquet rosas pasión",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 600,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_10.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4600,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5600,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7200,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1010",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1011,
    categoryId: "combinados",
    baseTitle: "Ramo lirios armonía",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 480,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_11.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4800,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5900,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7600,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1011",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1012,
    categoryId: "rosas",
    baseTitle: "Amor incandescente",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 250,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_12.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4900,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6000,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1012",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  
  {
    id: 1016,
    categoryId: "gerberas",
    baseTitle: "Bouquet Gerberas y peluche",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 790,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_16.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5100,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7900,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1016",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1017,
    categoryId: "corazones",
    baseTitle: "Corazón rosas princesa",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 850,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_45.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 7000,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 8500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 10900,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COR-1017",
    menuAssignments: [
      {
        groupId: "corazones",
        subcategory: "CORAZONES",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1018,
    categoryId: "gerberas",
    baseTitle: "Bouquet encanto alegría",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 600,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_18.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5900,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9200,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1018",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  
  {
    id: 1020,
    categoryId: "combinados",
    baseTitle: "Lirios para mi delfino",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 550,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_20.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5300,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1020",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1021,
    categoryId: "combinados",
    baseTitle: "Bouquet lirios y rosa + globo",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 650,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_21.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4800,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5800,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7400,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1021",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1022,
    categoryId: "gerberas",
    baseTitle: "Bouquet Rosas, astromelias y gerbera",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 790,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_22.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5300,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1022",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1023,
    categoryId: "rosas",
    baseTitle: "Bouquet amor incandescente",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 450,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_23.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5100,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7900,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1023",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1024,
    categoryId: "rosas",
    baseTitle: "Lirios princesa",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 780,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_24.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5900,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9200,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1024",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1025,
    categoryId: "combinados",
    baseTitle: "Girasoles con gerberas",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 450,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_25.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5300,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1025",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1026,
    categoryId: "combinados",
    baseTitle: "Arreglo floreable",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 490,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_26.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5100,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7900,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1026",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1027,
    categoryId: "rosas",
    baseTitle: "Bouquet lunes infinito",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 700,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_27.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5900,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9200,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1027",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1048,
    categoryId: "gerberas",
    baseTitle: "Bouquet encuentro amor",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 600,  
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_48.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5700,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7000,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9000,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1048",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1028,
    categoryId: "rosas",
    baseTitle: "Detalle unico",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 220,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_28.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7600,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1028",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },

  {
    id: 1049,
    categoryId: "rosas",
    baseTitle: "Bouquet mi unico amor",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 1100,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_49.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7600,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1049",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },

  {
    id: 1029,
    categoryId: "rosas",
    baseTitle: "Bouquet  regalo",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 600,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_29.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5700,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6900,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8800,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1029",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },

  {
    id: 1050,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas pink",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 850,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_50.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5700,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6900,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8800,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1050",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },

  {
    id: 1030,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas Lirios",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 750,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_30.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4300,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 6700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1030",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1032,
    categoryId: "combinados",
    baseTitle: "Bouquet Hortensia ...",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 850,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_32.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4600,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5600,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7200,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1032",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1033,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas fest",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 300,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_33.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5300,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1033",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1034,
    categoryId: "gerberas",
    baseTitle: "Bouquet Naturaleza",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 850,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_34.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4800,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 5900,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7600,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1034",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true,
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1035,
    categoryId: "combinados",
    baseTitle: "Orquídea Belleza",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 880,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_35.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5100,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7900,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1035",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true, 
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1036,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas Amor",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 1100,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_36.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 6200,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7600,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1036",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true, 
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1037,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas pastel",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 300,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_37.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5600,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6800,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1037",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true, 
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1038,
    categoryId: "rosas",
    baseTitle: "Bouquet Encanto 2",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 890,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_38.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 4900,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6000,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 7700,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1038",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true, 
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1039,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas Chantal",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 800,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_39.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5300,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1039",
    menuAssignments: [
      {
        groupId: "rosas", 
        subcategory: "ROSAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true, 
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1040,
    categoryId: "combinados",
    baseTitle: "Bouquet Rosas y Peluche",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 450,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_40.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 7800,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 9500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 12200,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1040",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true, 
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },
  {
    id: 1041,
    categoryId: "gerberas",
    baseTitle: "Bouquet Gerberas",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 800,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_41.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 5700,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 7000,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 9000,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1041",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
      showBadge: true,
      showDeliveryDate: false,
      showColorDots: false,
      showProductSizes: true, 
      showStandard: false,
      showPremium: false,
      showLuxury: false,
    },
  },

  
  {
    id: 1043,
    categoryId: "combinados",
    baseTitle: "Bouquet Girasol y Rosas",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 1400,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_47.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 750,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1043",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
  showBadge: true,
  showDeliveryDate: false,
  showColorDots: false,
  showProductSizes: false,
  showStandard: false,
  showPremium: false,
  showLuxury: false,
},
  },

  {
    id: 1051,
    categoryId: "gerberas",
    baseTitle: "Ramo Gerbera blanca - azul",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 260,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_51.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 750,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "GER-1051",
    menuAssignments: [
      {
        groupId: "gerberas",
        subcategory: "GERBERAS",
      },
    ],
    ui: {
  showBadge: true,
  showDeliveryDate: false,
  showColorDots: false,
  showProductSizes: false,
  showStandard: false,
  showPremium: false,
  showLuxury: false,
},
  }
,


  {
    id: 1052,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas Azules",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 560,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_52.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 750,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1052",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
  showBadge: true,
  showDeliveryDate: false,
  showColorDots: false,
  showProductSizes: false,
  showStandard: false,
  showPremium: false,
  showLuxury: false,
},
  }

  ,


  {
    id: 1053,
    categoryId: "combinados",
    baseTitle: "Bouquet Rosas Combinados Azules",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 400,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_53.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 750,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "COM-1053",
    menuAssignments: [
      {
        groupId: "combinados",
        subcategory: "COMBINADOS",
      },
    ],
    ui: {
  showBadge: true,
  showDeliveryDate: false,
  showColorDots: false,
  showProductSizes: false,
  showStandard: false,
  showPremium: false,
  showLuxury: false,
},
  },

  
  {
    id: 1054,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas -Rojas",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 450,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_54.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 750,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1054",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
  showBadge: true,
  showDeliveryDate: false,
  showColorDots: false,
  showProductSizes: false,
  showStandard: false,
  showPremium: false,
  showLuxury: false,
},
  },

  
  {
    id: 1055,
    categoryId: "rosas",
    baseTitle: "Bouquet Rosas Encanto",
    subtitle: "",
    badgeLabel: "",
    basePriceMxn: 400,
    defaultImages: [
      "/images/tenants/cielitodeflores/catalog/cielitodeflores_55.jpg",
    ],
    activeSizeOptions: [],
    productSizes: [
      {
        id: "estandar",
        label: "ESTÁNDAR",
        priceMxn: 750,
        subtitle: "",
      },
      {
        id: "premium",
        label: "PREMIUM",
        priceMxn: 6500,
        subtitle: "",
      },
      {
        id: "luxury",
        label: "LUXURY",
        priceMxn: 8300,
        subtitle: "",
      },
    ],
    colorDots: [],
    badge: "",
    deliveryMessage: "",
    sku: "ROS-1055",
    menuAssignments: [
      {
        groupId: "rosas",
        subcategory: "ROSAS",
      },
    ],
    ui: {
  showBadge: true,
  showDeliveryDate: false,
  showColorDots: false,
  showProductSizes: false,
  showStandard: false,
  showPremium: false,
  showLuxury: false,
},
  }

  
];


/* ============================================================
 * HELPERS
 * ============================================================
 */

export function buildCardUiMeta(productId: number): CatalogProduct {
  const product = catalogProducts.find((item) => item.id === productId);

  if (!product) {
    throw new Error(`Missing catalog data for product ${productId}`);
  }

  return product;
}
