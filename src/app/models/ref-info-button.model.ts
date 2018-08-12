export interface RefInfoButtonModel {
  id: number;
  name: string;
  price: string;
  refUrl: string;
  enabled: boolean;
}

export function createDefaultsRefInfoButton() {
  return {
    id: 1,
    name: "Литрес",
    price: "456",
    refUrl: "https://yandex.ru",
    enabled: true,
  }
}
