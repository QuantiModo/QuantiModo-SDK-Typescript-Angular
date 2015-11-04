/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class CredentialApi {
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


        public credentialsGet (connectorId?: boolean, attrKey?: string, attrValue?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_9> {
            const path = this.basePath + '/credentials';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (connectorId !== undefined) {
                queryParameters['connector_id'] = connectorId;
            }

            if (attrKey !== undefined) {
                queryParameters['attr_key'] = attrKey;
            }

            if (attrValue !== undefined) {
                queryParameters['attr_value'] = attrValue;
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

        public credentialsPost (body?: Credential, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_10> {
            const path = this.basePath + '/credentials';

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

        public credentialsIdGet (id: number, attrKey: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_10> {
            const path = this.basePath + '/credentials/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling credentialsIdGet');
            }
            // verify required parameter 'attrKey' is set
            if (!attrKey) {
                throw new Error('Missing required parameter attrKey when calling credentialsIdGet');
            }
            if (attrKey !== undefined) {
                queryParameters['attrKey'] = attrKey;
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

        public credentialsIdPut (id: number, attrKey: string, body?: Credential, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/credentials/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling credentialsIdPut');
            }
            // verify required parameter 'attrKey' is set
            if (!attrKey) {
                throw new Error('Missing required parameter attrKey when calling credentialsIdPut');
            }
            if (attrKey !== undefined) {
                queryParameters['attrKey'] = attrKey;
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

        public credentialsIdDelete (id: number, attrKey: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/credentials/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling credentialsIdDelete');
            }
            // verify required parameter 'attrKey' is set
            if (!attrKey) {
                throw new Error('Missing required parameter attrKey when calling credentialsIdDelete');
            }
            if (attrKey !== undefined) {
                queryParameters['attrKey'] = attrKey;
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
