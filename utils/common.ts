export function createArray(length = 10) {
  return Array.from({ length }, (_, index) => index + 1)
}

export function removeSubdomain(url: string) {
  const withoutSubdomain = url.replace(URL_SUBDOMAIN_REGEX, '')

  return withoutSubdomain
}
