/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class PairsApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public pairsGet (cause: string, effect: string, causeSource?: string, causeUnit?: string, delay?: string, duration?: string, effectSource?: string, effectUnit?: string, endTime?: string, startTime?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Pairs>> {
            var path = this.basePath + '/pairs';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'cause' is set
            if (!cause) {
                throw new Error('Missing required parameter cause when calling pairsGet');
            }

            // verify required parameter 'effect' is set
            if (!effect) {
                throw new Error('Missing required parameter effect when calling pairsGet');
            }

            if (cause !== undefined) {
                queryParameters['cause'] = cause;
            }

            if (causeSource !== undefined) {
                queryParameters['causeSource'] = causeSource;
            }

            if (causeUnit !== undefined) {
                queryParameters['causeUnit'] = causeUnit;
            }

            if (delay !== undefined) {
                queryParameters['delay'] = delay;
            }

            if (duration !== undefined) {
                queryParameters['duration'] = duration;
            }

            if (effect !== undefined) {
                queryParameters['effect'] = effect;
            }

            if (effectSource !== undefined) {
                queryParameters['effectSource'] = effectSource;
            }

            if (effectUnit !== undefined) {
                queryParameters['effectUnit'] = effectUnit;
            }

            if (endTime !== undefined) {
                queryParameters['endTime'] = endTime;
            }

            if (startTime !== undefined) {
                queryParameters['startTime'] = startTime;
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
    }
}
