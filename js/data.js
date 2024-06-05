// Code base was made by SnIpErZ (Саша)

export async function loadAccount() {
	try {
		let data

		// Check if data is available in localStorage
		const storedData = localStorage.getItem('accountData')
		if (storedData) {
			data = JSON.parse(storedData)
		} else {
			const response = await fetch('../json/accounts.json')
			data = await response.json()
			localStorage.setItem('accountData', JSON.stringify(data))
		}

		return data
	} catch (error) {
		console.error('Error loading accounts data:', error)
	}
}

// Made by GeeksForGeeks
export function saveStateToLocalStorage(data) {
    localStorage.setItem("accountData",JSON.stringify(data));
}