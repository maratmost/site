// Helper для путей с учетом basePath на GitHub Pages
export const basePath = process.env.NODE_ENV === 'production' ? '/site' : ''

export function getImagePath(path: string): string {
  return `${basePath}${path}`
}

