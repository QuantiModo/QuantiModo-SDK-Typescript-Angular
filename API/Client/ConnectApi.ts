/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class ConnectApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public v1Connect.jsGet (t?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/v1/connect.js';

            var queryParameters: any = {};
            var headerParams: any = {};

            if (t !== undefined) {
                queryParameters['t'] = t;
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

        public v1ConnectMobileGet (t: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/v1/connect/mobile';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 't' is set
            if (!t) {
                throw new Error('Missing required parameter t when calling v1ConnectMobileGet');
            }

            if (t !== undefined) {
                queryParameters['t'] = t;
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
