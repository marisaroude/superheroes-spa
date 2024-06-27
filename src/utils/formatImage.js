export function formatImageName(imageName) {
    if (!imageName) return ''
    const parts = imageName.split('-')
    const formattedParts = parts.map(
        (part) => part.charAt(0).toUpperCase() + part.slice(1)
    )
    return formattedParts.join('-')
}