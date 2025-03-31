import qs from 'qs'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)  // Grab the request body
    console.log('💠 Received body:', body)

    // Check if data is coming in correctly
    const { action, format, text, prop } = body
    if (!action || !format || !text || !prop) {
      throw new Error('Missing required fields in the request body')
    }

    //  constructing a request to the external Wiki API (or local handling)
    const params = {
      action,
      format,
      text,
      prop,
    }

    const response = await $fetch('https://wiki.leagueoflegends.com/en-us/api.php', {
      method: 'POST',
      body: qs.stringify(params), // Ensure qs is used to serialize the body
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    
    console.log('💠 Response from external API:', response)
    
    // Return the response back to the client
    return response

  } catch (error: any) {
    console.error('Error in API handler:', error) // Log the error
    return { error: 'Wiki API request failed', details: error.message }
  }
})