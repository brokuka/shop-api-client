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

  function select(v: VersionName) {
    const protocol = `${window.location.protocol}//`
    const hasSubDomain = isSubdomain(url.host)
    const nextVersionUrl = `${protocol}next.${hasSubDomain ? removeSubdomain(url.host) : url.host}`

    if (v === currentVersion.value.name)
      return

    if (v === 'next')
      return navigateTo(nextVersionUrl, { external: true, replace: true })

    if (v === 'main')
      return navigateTo(`${protocol}${removeSubdomain(url.host)}`, { external: true, replace: true })
  }

  return {
    versions,
    currentVersion,
  }
}
