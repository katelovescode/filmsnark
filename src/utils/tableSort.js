export const tableSort = {
  up: {
    class: "sort-up",
    fn: (a, b) => a - b,
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b - a,
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
}
