import { decode} from 'html-entities';

export function cleanHtmlEntitiesAndTags(str) {
    if (typeof str !== 'string') {
        console.error('Expected a string but got:', typeof str, str);
        return str; // Return as-is if not a string
    }

    // Decode HTML entities
    let decodedStr = decode(str);
    console.log("💠 - cleanHtmlEntitiesAndTags - decodedStr:", decodedStr)

   // Remove HTML tags
    decodedStr = decodedStr.replace(/<[^>]*>/g, '');

    // Remove unescaped control characters (e.g., newlines in JSON values)
    decodedStr = decodedStr.replace(/[\u0000-\u001F\u007F]/g, ' '); // Replace with a space

    return decodedStr;

}

export function cleanJsonString(jsonStr) {
    try {
        if (typeof jsonStr !== 'string') {
            throw new TypeError('Input to cleanJsonString must be a string');
        }

        // Decode and clean the JSON string
        const cleanedJsonStr = cleanHtmlEntitiesAndTags(jsonStr);

        // Parse the cleaned JSON
    return JSON.parse(cleanedJsonStr);
    } catch (error) {
        console.error('Error parsing JSON after cleaning:', error);
        return null;
    }
}