/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class VotesApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
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
