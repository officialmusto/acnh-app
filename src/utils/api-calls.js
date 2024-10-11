import { API_KEY } from '@env'

const BASE_URL = 'https://api.nookipedia.com'

export async function getVillagers() {
  try {
    const response = await fetch(`${BASE_URL}/villagers`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    })

    // Wait for the response and parse it as JSON
    const data = await response.json()

    // Return the data
    return data
  } catch (error) {
    console.error("Failed to load villagers:", error)
    throw error
  }
}