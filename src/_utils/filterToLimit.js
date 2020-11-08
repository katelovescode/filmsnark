export function filterToLimit(array, callback, limit) {
  const filtered = array.filter(
    function (item) {
      if (this.count < limit && callback(item)) {
        this.count++
        return true
      }
      return false
    },
    { count: 0 }
  )
  return filtered
}
