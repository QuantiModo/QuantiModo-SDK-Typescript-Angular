/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class MeasurementsApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public measurementSourcesGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<MeasurementSource> {
            var path = this.basePath + '/measurementSources';

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

        public measurementSourcesPost (name: MeasurementSource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/measurementSources';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'name' is set
            if (!name) {
                throw new Error('Missing required parameter name when calling measurementSourcesPost');
            }

            var httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: name,
                
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

        public measurementsGet (variableName: string, unit?: string, startTime?: string, endTime?: string, groupingWidth?: number, groupingTimezone?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Measurement> {
            var path = this.basePath + '/measurements';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling measurementsGet');
            }

            if (variableName !== undefined) {
                queryParameters['variableName'] = variableName;
            }

            if (unit !== undefined) {
                queryParameters['unit'] = unit;
            }

            if (startTime !== undefined) {
                queryParameters['startTime'] = startTime;
            }

            if (endTime !== undefined) {
                queryParameters['endTime'] = endTime;
            }

            if (groupingWidth !== undefined) {
                queryParameters['groupingWidth'] = groupingWidth;
            }

            if (groupingTimezone !== undefined) {
                queryParameters['groupingTimezone'] = groupingTimezone;
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

        public measurementsV2Post (measurements: MeasurementSet, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/measurements/v2';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'measurements' is set
            if (!measurements) {
                throw new Error('Missing required parameter measurements when calling measurementsV2Post');
            }

            var httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: measurements,
                
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

        public measurementsRangeGet (sources?: string, user?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<MeasurementRange> {
            var path = this.basePath + '/measurementsRange';

            var queryParameters: any = {};
            var headerParams: any = {};

            if (sources !== undefined) {
                queryParameters['sources'] = sources;
            }

            if (user !== undefined) {
                queryParameters['user'] = user;
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
