/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class UserApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public userMeGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<User> {
            var path = this.basePath + '/user/me';

            var queryParameters: any = {};
            var headerParams: any = {};

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

        public v1OrganizationsOrganizationIdUsersPost (organizationId: number, body: UserTokenRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<UserTokenSuccessfulResponse> {
            var path = this.basePath + '/v1/organizations/{organizationId}/users';

            path = path.replace('{' + 'organizationId' + '}', String(organizationId));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'organizationId' is set
            if (!organizationId) {
                throw new Error('Missing required parameter organizationId when calling v1OrganizationsOrganizationIdUsersPost');
            }

            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1OrganizationsOrganizationIdUsersPost');
            }

            var httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: body,
                
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
