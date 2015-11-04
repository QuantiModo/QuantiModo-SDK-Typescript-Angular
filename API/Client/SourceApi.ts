/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class SourceApi {
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


        public sourcesGet (clientId?: string, name?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_13> {
            const path = this.basePath + '/sources';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (clientId !== undefined) {
                queryParameters['client_id'] = clientId;
            }

            if (name !== undefined) {
                queryParameters['name'] = name;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
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

        public sourcesPost (body?: Source, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_14> {
            const path = this.basePath + '/sources';

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

        public sourcesIdGet (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_14> {
            const path = this.basePath + '/sources/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling sourcesIdGet');
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

        public sourcesIdPut (id: number, body?: Source, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/sources/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling sourcesIdPut');
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

        public sourcesIdDelete (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/sources/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling sourcesIdDelete');
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
