export interface RefInfoButtonModel {
  id: number;
  name: string;
  label: string;
  price: string;
  refUrl: string;
  enabled: boolean;
}

export function createDefaultsRefInfoButton() {
  return {
    id: 1,
    name: "Литрес",
    label: "litres",
    price: "456",
    refUrl: "https://yandex.ru",
    enabled: true,
  }
}
