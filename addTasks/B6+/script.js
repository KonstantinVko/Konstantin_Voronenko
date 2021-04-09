function formatNumber(number, string = '# ### ###.##') {
    return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
}


console.log(formatNumber(3.3))