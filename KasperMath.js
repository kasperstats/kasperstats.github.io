function Median(numbers)
{
    const sortedNumbers = numbers.slice().sort((a, b) => a - b); // Copy and sort the array
    const length = sortedNumbers.length;
    
    if (length % 2 === 1) {
        return sortedNumbers[Math.floor(length / 2)];
    } else {
        const middleIndex = length / 2;
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    }
}

function FormatRateStat(num) 
{
	if (num < 1) {
		return num.toFixed(3).slice(1);
	} else {
		const integerPart = Math.floor(num);
		const fractionalPart = (num % 1) * 1000;
		return (integerPart + fractionalPart / 1000).toFixed(3);
	}
}

function Round(num)
{
	return Round(num, 3);
}
		
		
function Round(num, places)
{
	return num.toFixed(places);
}
		