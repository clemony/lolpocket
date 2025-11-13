export function attrsToProps(attrs) {
  return {
    id: attrs["data-id"],
    key: attrs["data-key"],
    name: attrs["data-name"],
  };
}
