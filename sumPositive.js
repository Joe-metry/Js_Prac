const sumPositive = (arr) => {
	let sumz = 0;
	for (let i = 0; i < arr.length; i++) 
	{
		if (arr[i] > 0)
		{
			sumz += arr[i];
		} 
	}
	return sumz;
}
