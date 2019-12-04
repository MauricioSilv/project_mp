export function routeConfig(signedIn, isAdmin) {
  if (signedIn && isAdmin) {
    return 'Admin';
  }
  if (signedIn) {
    return 'App';
  }
  return 'Sign';
}
