/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class CorrelationsApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public correlationsGet (effect?: string, cause?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            var path = this.basePath + '/correlations';

            var queryParameters: any = {};
            var headerParams: any = {};

            if (effect !== undefined) {
                queryParameters['effect'] = effect;
            }

            if (cause !== undefined) {
                queryParameters['cause'] = cause;
            }

            if (limit !== undefined) {
                queryParameters['limit'] = limit;
            }

            if (offset !== undefined) {
                queryParameters['offset'] = offset;
            }

            if (sort !== undefined) {
                queryParameters['sort'] = sort;
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

        public publicCorrelationsSearchSearchGet (search: string, effectOrCause: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            var path = this.basePath + '/public/correlations/search/{search}';

            path = path.replace('{' + 'search' + '}', String(search));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'search' is set
            if (!search) {
                throw new Error('Missing required parameter search when calling publicCorrelationsSearchSearchGet');
            }

            // verify required parameter 'effectOrCause' is set
            if (!effectOrCause) {
                throw new Error('Missing required parameter effectOrCause when calling publicCorrelationsSearchSearchGet');
            }

            if (effectOrCause !== undefined) {
                queryParameters['effectOrCause'] = effectOrCause;
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

        public v1CorrelationsPost (body: PostCorrelation, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/v1/correlations';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1CorrelationsPost');
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

        public v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet (organizationId: number, userId: number, variableName: string, organizationToken: string, includePublic?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            var path = this.basePath + '/v1/organizations/{organizationId}/users/{userId}/variables/{variableName}/causes';

            path = path.replace('{' + 'organizationId' + '}', String(organizationId));

            path = path.replace('{' + 'userId' + '}', String(userId));

            path = path.replace('{' + 'variableName' + '}', String(variableName));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'organizationId' is set
            if (!organizationId) {
                throw new Error('Missing required parameter organizationId when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet');
            }

            // verify required parameter 'userId' is set
            if (!userId) {
                throw new Error('Missing required parameter userId when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet');
            }

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet');
            }

            // verify required parameter 'organizationToken' is set
            if (!organizationToken) {
                throw new Error('Missing required parameter organizationToken when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet');
            }

            if (organizationToken !== undefined) {
                queryParameters['organizationToken'] = organizationToken;
            }

            if (includePublic !== undefined) {
                queryParameters['includePublic'] = includePublic;
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

        public v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet (organizationId: number, userId: number, variableName: string, organizationToken: string, includePublic?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<CommonResponse>> {
            var path = this.basePath + '/v1/organizations/{organizationId}/users/{userId}/variables/{variableName}/effects';

            path = path.replace('{' + 'organizationId' + '}', String(organizationId));

            path = path.replace('{' + 'userId' + '}', String(userId));

            path = path.replace('{' + 'variableName' + '}', String(variableName));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'organizationId' is set
            if (!organizationId) {
                throw new Error('Missing required parameter organizationId when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet');
            }

            // verify required parameter 'userId' is set
            if (!userId) {
                throw new Error('Missing required parameter userId when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet');
            }

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet');
            }

            // verify required parameter 'organizationToken' is set
            if (!organizationToken) {
                throw new Error('Missing required parameter organizationToken when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet');
            }

            if (organizationToken !== undefined) {
                queryParameters['organizationToken'] = organizationToken;
            }

            if (includePublic !== undefined) {
                queryParameters['includePublic'] = includePublic;
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

        public v1VariablesVariableNameCausesGet (variableName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            var path = this.basePath + '/v1/variables/{variableName}/causes';

            path = path.replace('{' + 'variableName' + '}', String(variableName));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNameCausesGet');
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

        public v1VariablesVariableNameEffectsGet (variableName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            var path = this.basePath + '/v1/variables/{variableName}/effects';

            path = path.replace('{' + 'variableName' + '}', String(variableName));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNameEffectsGet');
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

        public v1VariablesVariableNamePublicCausesGet (variableName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            var path = this.basePath + '/v1/variables/{variableName}/public/causes';

            path = path.replace('{' + 'variableName' + '}', String(variableName));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNamePublicCausesGet');
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

        public v1VariablesVariableNamePublicEffectsGet (variableName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            var path = this.basePath + '/v1/variables/{variableName}/public/effects';

            path = path.replace('{' + 'variableName' + '}', String(variableName));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNamePublicEffectsGet');
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

        public v1VotesPost (cause: string, effect: string, vote?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            var path = this.basePath + '/v1/votes';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'cause' is set
            if (!cause) {
                throw new Error('Missing required parameter cause when calling v1VotesPost');
            }

            // verify required parameter 'effect' is set
            if (!effect) {
                throw new Error('Missing required parameter effect when calling v1VotesPost');
            }

            if (cause !== undefined) {
                queryParameters['cause'] = cause;
            }

            if (effect !== undefined) {
                queryParameters['effect'] = effect;
            }

            if (vote !== undefined) {
                queryParameters['vote'] = vote;
            }

            var httpRequestParams: any = {
                method: 'POST',
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

        public v1VotesDeletePost (cause: string, effect: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            var path = this.basePath + '/v1/votes/delete';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'cause' is set
            if (!cause) {
                throw new Error('Missing required parameter cause when calling v1VotesDeletePost');
            }

            // verify required parameter 'effect' is set
            if (!effect) {
                throw new Error('Missing required parameter effect when calling v1VotesDeletePost');
            }

            if (cause !== undefined) {
                queryParameters['cause'] = cause;
            }

            if (effect !== undefined) {
                queryParameters['effect'] = effect;
            }

            var httpRequestParams: any = {
                method: 'POST',
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
