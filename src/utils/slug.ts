export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function validateSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9-]{3,}$/
  return slugRegex.test(slug)
}
