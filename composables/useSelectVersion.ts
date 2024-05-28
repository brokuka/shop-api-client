type VersionName = 'main' | 'next'

export function useSelectVersion() {
  const url = useRequestURL()
  const config = useRuntimeConfig().public

  const versions = computed(() => [{
    name: 'main',
    label: 'main',
    suffix: `v${config.version}`,
    click: () => select('main'),
  }, {
    name: 'next',
    label: 'next',
    suffix: 'next',
    click: () => select('next'),
  }])

  const currentVersion = computed(() => versions.value.find(version => url.hostname.startsWith('next') ? version.name === 'next' : version.name === 'main') as typeof versions.value[number])

  const hasSubDomain = computed(() => Boolean(url.host.match(URL_WITH_SUBDOMAIN)))

  function select(version: VersionName) {
    const protocol = `${url.protocol}//`
    const nextVersionUrl = `${protocol}next.${hasSubDomain.value ? removeSubdomain(url.host) : url.host}`

    if (version === currentVersion.value.name)
      return

    if (version === 'next')
      return navigateTo(nextVersionUrl, { external: true, replace: true })

    if (version === 'main')
      return navigateTo(`${protocol}${removeSubdomain(url.host)}`, { external: true, replace: true })
  }

  return {
    versions,
    currentVersion,
  }
}
