export default function formattCurrency(num) {
   return "$" + Number(num.toFixed(1)).toLocaleString() + "";
}