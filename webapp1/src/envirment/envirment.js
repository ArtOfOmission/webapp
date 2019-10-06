
const idpBase = 'http://localhost:5001';
const apiBase = 'http://localhost:6001';
const angularBase = 'http://localhost:8020';

export const environment = {
    idpBase : 'http://localhost:5001',
    apiBase : apiBase,
    angularBase : 'http://localhost:8020',
    production: false,
    openIdConnectSettings: {
    authority: `${idpBase}`,
    client_id: 'angular-client',
    redirect_uri: `${angularBase}/signin-oidc`,
    post_logout_redirec_uri: `${angularBase}/`,
    silent_redirect_uri: `${angularBase}/redirect-silentrenew`,
    scope: 'api1 openid profile address email phone',
    response_type: 'id_token token',
    automaticSilentRenew: true
  }
};

