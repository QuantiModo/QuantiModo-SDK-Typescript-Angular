/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class OauthApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public oauth2AccesstokenGet (clientId: string, clientSecret: string, grantType: string, responseType?: string, scope?: string, redirectUri?: string, state?: string, realm?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/oauth2/accesstoken';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'clientId' is set
            if (!clientId) {
                throw new Error('Missing required parameter clientId when calling oauth2AccesstokenGet');
            }

            // verify required parameter 'clientSecret' is set
            if (!clientSecret) {
                throw new Error('Missing required parameter clientSecret when calling oauth2AccesstokenGet');
            }

            // verify required parameter 'grantType' is set
            if (!grantType) {
                throw new Error('Missing required parameter grantType when calling oauth2AccesstokenGet');
            }

            if (clientId !== undefined) {
                queryParameters['clientId'] = clientId;
            }

            if (clientSecret !== undefined) {
                queryParameters['clientSecret'] = clientSecret;
            }

            if (grantType !== undefined) {
                queryParameters['grantType'] = grantType;
            }

            if (responseType !== undefined) {
                queryParameters['responseType'] = responseType;
            }

            if (scope !== undefined) {
                queryParameters['scope'] = scope;
            }

            if (redirectUri !== undefined) {
                queryParameters['redirectUri'] = redirectUri;
            }

            if (state !== undefined) {
                queryParameters['state'] = state;
            }

            if (realm !== undefined) {
                queryParameters['realm'] = realm;
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }

        public oauth2AuthorizeGet (clientId: string, clientSecret: string, responseType: string, scope: string, redirectUri?: string, state?: string, realm?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/oauth2/authorize';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'clientId' is set
            if (!clientId) {
                throw new Error('Missing required parameter clientId when calling oauth2AuthorizeGet');
            }

            // verify required parameter 'clientSecret' is set
            if (!clientSecret) {
                throw new Error('Missing required parameter clientSecret when calling oauth2AuthorizeGet');
            }

            // verify required parameter 'responseType' is set
            if (!responseType) {
                throw new Error('Missing required parameter responseType when calling oauth2AuthorizeGet');
            }

            // verify required parameter 'scope' is set
            if (!scope) {
                throw new Error('Missing required parameter scope when calling oauth2AuthorizeGet');
            }

            if (clientId !== undefined) {
                queryParameters['clientId'] = clientId;
            }

            if (clientSecret !== undefined) {
                queryParameters['clientSecret'] = clientSecret;
            }

            if (responseType !== undefined) {
                queryParameters['responseType'] = responseType;
            }

            if (scope !== undefined) {
                queryParameters['scope'] = scope;
            }

            if (redirectUri !== undefined) {
                queryParameters['redirectUri'] = redirectUri;
            }

            if (state !== undefined) {
                queryParameters['state'] = state;
            }

            if (realm !== undefined) {
                queryParameters['realm'] = realm;
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }
    }
}
