const _formatNumber = (num: number | string): string =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

export { _formatNumber };
