interface Translatable {
  en: string;
  zh_HK?: string;
}

interface AttributeOption {
  value: string;
  description: Translatable,
  default?: boolean;
}

interface RoleAttribute {
  attbId: string;
  attbTitle: Translatable;
  attbType: string;
  attbOptions?: AttributeOption[];
}

interface Application {
  systemId: string;
  systemDescription: Translatable;
  roleAttributes: RoleAttribute[];
}