/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class VariableApi {
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


        public variablesGet (id?: number, clientId?: string, parentId?: number, name?: string, variableCategoryId?: number, defaultUnitId?: number, combinationOperation?: string, fillingValue?: number, maximumAllowedValue?: number, minimumAllowedValue?: number, onsetDelay?: number, durationOfAction?: number, _public?: number, causeOnly?: boolean, mostCommonValue?: number, mostCommonUnitId?: number, standardDeviation?: number, variance?: number, mean?: number, median?: number, numberOfMeasurements?: number, numberOfUniqueValues?: number, skewness?: number, kurtosis?: number, latitude?: number, longitude?: number, location?: string, status?: string, errorMessage?: string, lastSuccessfulUpdateTime?: string, createdAt?: string, updatedAt?: string, productUrl?: string, imageUrl?: string, price?: number, numberOfUserVariables?: number, outcome?: boolean, minimumRecordedValue?: number, maximumRecordedValue?: number, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_27> {
            const path = this.basePath + '/variables';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (id !== undefined) {
                queryParameters['id'] = id;
            }

            if (clientId !== undefined) {
                queryParameters['client_id'] = clientId;
            }

            if (parentId !== undefined) {
                queryParameters['parent_id'] = parentId;
            }

            if (name !== undefined) {
                queryParameters['name'] = name;
            }

            if (variableCategoryId !== undefined) {
                queryParameters['variable_category_id'] = variableCategoryId;
            }

            if (defaultUnitId !== undefined) {
                queryParameters['default_unit_id'] = defaultUnitId;
            }

            if (combinationOperation !== undefined) {
                queryParameters['combination_operation'] = combinationOperation;
            }

            if (fillingValue !== undefined) {
                queryParameters['filling_value'] = fillingValue;
            }

            if (maximumAllowedValue !== undefined) {
                queryParameters['maximum_allowed_value'] = maximumAllowedValue;
            }

            if (minimumAllowedValue !== undefined) {
                queryParameters['minimum_allowed_value'] = minimumAllowedValue;
            }

            if (onsetDelay !== undefined) {
                queryParameters['onset_delay'] = onsetDelay;
            }

            if (durationOfAction !== undefined) {
                queryParameters['duration_of_action'] = durationOfAction;
            }

            if (_public !== undefined) {
                queryParameters['public'] = _public;
            }

            if (causeOnly !== undefined) {
                queryParameters['cause_only'] = causeOnly;
            }

            if (mostCommonValue !== undefined) {
                queryParameters['most_common_value'] = mostCommonValue;
            }

            if (mostCommonUnitId !== undefined) {
                queryParameters['most_common_unit_id'] = mostCommonUnitId;
            }

            if (standardDeviation !== undefined) {
                queryParameters['standard_deviation'] = standardDeviation;
            }

            if (variance !== undefined) {
                queryParameters['variance'] = variance;
            }

            if (mean !== undefined) {
                queryParameters['mean'] = mean;
            }

            if (median !== undefined) {
                queryParameters['median'] = median;
            }

            if (numberOfMeasurements !== undefined) {
                queryParameters['number_of_measurements'] = numberOfMeasurements;
            }

            if (numberOfUniqueValues !== undefined) {
                queryParameters['number_of_unique_values'] = numberOfUniqueValues;
            }

            if (skewness !== undefined) {
                queryParameters['skewness'] = skewness;
            }

            if (kurtosis !== undefined) {
                queryParameters['kurtosis'] = kurtosis;
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

            if (status !== undefined) {
                queryParameters['status'] = status;
            }

            if (errorMessage !== undefined) {
                queryParameters['error_message'] = errorMessage;
            }

            if (lastSuccessfulUpdateTime !== undefined) {
                queryParameters['last_successful_update_time'] = lastSuccessfulUpdateTime;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
            }

            if (productUrl !== undefined) {
                queryParameters['product_url'] = productUrl;
            }

            if (imageUrl !== undefined) {
                queryParameters['image_url'] = imageUrl;
            }

            if (price !== undefined) {
                queryParameters['price'] = price;
            }

            if (numberOfUserVariables !== undefined) {
                queryParameters['number_of_user_variables'] = numberOfUserVariables;
            }

            if (outcome !== undefined) {
                queryParameters['outcome'] = outcome;
            }

            if (minimumRecordedValue !== undefined) {
                queryParameters['minimum_recorded_value'] = minimumRecordedValue;
            }

            if (maximumRecordedValue !== undefined) {
                queryParameters['maximum_recorded_value'] = maximumRecordedValue;
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

        public variablesPost (body?: Variable, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_28> {
            const path = this.basePath + '/variables';

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

        public variablesIdGet (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_28> {
            const path = this.basePath + '/variables/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling variablesIdGet');
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

        public variablesIdPut (id: number, body?: Variable, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/variables/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling variablesIdPut');
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

        public variablesIdDelete (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/variables/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling variablesIdDelete');
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
