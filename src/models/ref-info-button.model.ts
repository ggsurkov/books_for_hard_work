export interface RefInfoButtonModel {
  id: number;
  name: string;
  refUrl: string;
  enabled: boolean;
}

export function createDefaultsRefInfoButton() {
  return {
    id: 1,
    name: "Литрес",
    refUrl: "https://yandex.ru",
    enabled: true,
  }
}
