export function createArray(length = 10) {
  return Array.from({ length }, (_, index) => index + 1)
}

export function isSubdomain(url: string) {
  const regex = /^([a-zA-Z0-9][a-zA-Z0-9-]{0,61}\.)+[a-zA-Z]{2,}$/

  return !!url.match(regex)
}

export function removeSubdomain(url: string) {
	const withoutSubdomain = url.replace(URL_SUBDOMAIN_REGEX, '')

	return withoutSubdomain
}
