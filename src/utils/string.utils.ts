// sobrecarga para quando uma string é definitivamente passada como entrada
export function toLower(str: string): string;
// sobrecarga para quando a entrada pode ser string, null ou undefined
export function toLower(str: string | null | undefined): string | null | undefined;

/* converte uma string para lowercase e remove espaços extras no início/fim.
se a entrada for null ou undefined, retorna o valor original. */
export function toLower(str: string | null | undefined): string | null | undefined {
  if (typeof str === 'string') {
    return str.toLowerCase().trim();
  }
  return str; // retorna null ou undefined como está
}

/* capitaliza a primeira letra de uma string.
retorna uma string vazia se a entrada for null, undefined ou vazia. */
export const capitalizeFirstLetter = (str: string | null | undefined): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/* capitaliza a primeira letra de cada palavra (após converter para lowercase).
retorna string vazia se entrada for null, undefined ou vazia. */
export const capitalizeWords = (str: string | null | undefined): string => {
  if (!str) return '';
  // converte para lowercase primeiro para garantir consistência
  return str.toLowerCase().split(' ').map(word => {
    if (word.length === 0) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};