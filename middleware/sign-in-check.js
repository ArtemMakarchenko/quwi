export default async function ({$auth, store}) {
  if ($auth.user) {
    store.dispatch('getProjects')
  }
}