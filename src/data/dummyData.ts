import { Option } from "@/components/ui/multi-select";

export const SELECT_OPTIONS = [
  {
    value: "m@example.com",
    label: "m@example.com",
  },
  {
    value: "m@google.com",
    label: "m@google.com",
  },
  {
    value: "m@support.com",
    label: "m@support.com",
  },
];

export const MULTIPLE_SELECT_OPTIONS: Option[] = [
  {
    value: "1",
    label: "Option 1",
  },
  {
    value: "2",
    label: "Option 2",
  },
  {
    value: "3",
    label: "Option 3",
    disable: true,
  },
  {
    value: "4",
    label: "Option 4",
  },
  {
    value: "5",
    label: "Option 5",
  },
  {
    value: "6",
    label: "Option 6",
  },
  {
    value: "7",
    label: "Option 7",
  },
  {
    value: "8",
    label: "Option 8",
  },
];

export const CHECKBOX_ITEMS = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
    disable: true,
  },
] as const;

export const RADIO_ITEMS = [
  {
    id: "all",
    label: "all",
  },
  {
    id: "mentions",
    label: "mentions",
  },
  {
    id: "none",
    label: "none",
    disable: true,
  },
];
