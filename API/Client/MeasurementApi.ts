/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class MeasurementApi {
        private basePath = 'https://app.quantimo.do/api/v2';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(private $http: ng.IHttpService, basePath?: string, private $httpParamSerializer?: (d: any) => any) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }


        public measurementsGet (userId?: number, clientId?: string, connectorId?: number, variableId?: number, startTime?: number, value?: number, originalValue?: number, duration?: number, note?: string, latitude?: number, longitude?: number, location?: string, createdAt?: string, updatedAt?: string, error?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_11> {
            const path = this.basePath + '/measurements';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (userId !== undefined) {
                queryParameters['user_id'] = userId;
            }

            if (clientId !== undefined) {
                queryParameters['client_id'] = clientId;
            }

            if (connectorId !== undefined) {
                queryParameters['connector_id'] = connectorId;
            }

            if (variableId !== undefined) {
                queryParameters['variable_id'] = variableId;
            }

            if (startTime !== undefined) {
                queryParameters['start_time'] = startTime;
            }

            if (value !== undefined) {
                queryParameters['value'] = value;
            }

            if (originalValue !== undefined) {
                queryParameters['original_value'] = originalValue;
            }

            if (duration !== undefined) {
                queryParameters['duration'] = duration;
            }

            if (note !== undefined) {
                queryParameters['note'] = note;
            }

            if (latitude !== undefined) {
                queryParameters['latitude'] = latitude;
            }

            if (longitude !== undefined) {
                queryParameters['longitude'] = longitude;
            }

            if (location !== undefined) {
                queryParameters['location'] = location;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
            }

            if (error !== undefined) {
                queryParameters['error'] = error;
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

            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public measurementsPost (body?: MeasurementPost, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_11> {
            const path = this.basePath + '/measurements';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: body,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public measurementsCsvGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
            const path = this.basePath + '/measurements/csv';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public measurementsRequestCsvPost (extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const path = this.basePath + '/measurements/request_csv';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public measurementsIdGet (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_12> {
            const path = this.basePath + '/measurements/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling measurementsIdGet');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public measurementsIdPut (id: number, body?: Measurement, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/measurements/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling measurementsIdPut');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: path,
                json: true,
                data: body,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public measurementsIdDelete (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/measurements/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling measurementsIdDelete');
            }
            let httpRequestParams: any = {
                method: 'DELETE',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
    }
}
